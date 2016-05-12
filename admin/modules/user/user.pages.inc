<?php

/**
 * @file
 * User page callback file for the admin module.
 */

/**
 * Menu callback; Retrieve a JSON object containing autocomplete suggestions for existing users.
 */
function user_autocomplete($string = '') {
  $matches = array();
  if ($string) {
    $result = db_select('users')->fields('users', array('name'))->condition('name', db_like($string) . '%', 'LIKE')->range(0, 10)->execute();
    foreach ($result as $user) {
      $matches[$user->name] = check_plain($user->name);
    }
  }

  drupal_json_output($matches);
}

/**
 * Form builder; Request a password reset.
 *
 * @ingroup forms
 * @see user_pass_validate()
 * @see user_pass_submit()
 */
function user_pass() {
  global $user;

  $form['name'] = array(
    '#type' => 'textfield',
    '#title' => t('Username or e-mail address'),
    '#size' => 60,
    '#maxlength' => max(USERNAME_MAX_LENGTH, EMAIL_MAX_LENGTH),
    '#required' => TRUE,
    '#default_value' => isset($_GET['name']) ? $_GET['name'] : '',
  );
  // Allow logged in users to request this also.
  if ($user->uid > 0) {
    $form['name']['#type'] = 'value';
    $form['name']['#value'] = $user->mail;
    $form['mail'] = array(
      '#prefix' => '<p>',
      '#markup' =>  t('Password reset instructions will be mailed to %email. You must log out to use the password reset link in the e-mail.', array('%email' => $user->mail)),
      '#suffix' => '</p>',
    );
  }
  $form['actions'] = array('#type' => 'actions');
  $form['actions']['submit'] = array('#type' => 'submit', '#value' => t('E-mail new password'));

  return $form;
}

function user_pass_validate($form, &$form_state) {
  $name = trim($form_state['values']['name']);
  // Try to load by email.
  $users = user_load_multiple(array(), array('mail' => $name, 'status' => '1'));
  $account = reset($users);
  if (!$account) {
    // No success, try to load by name.
    $users = user_load_multiple(array(), array('name' => $name, 'status' => '1'));
    $account = reset($users);
  }
  if (isset($account->uid)) {
    form_set_value(array('#parents' => array('account')), $account, $form_state);
  }
  else {
    form_set_error('name', t('Sorry, %name is not recognized as a admin name or an e-mail address.', array('%name' => $name)));
  }
}

function user_pass_submit($form, &$form_state) {
  global $language;

  $account = $form_state['values']['account'];
  // Mail one time login URL and instructions using current language.
  $mail = _user_mail_notify('password_reset', $account, $language);
  if (!empty($mail)) {
    watchdog('admin', 'Password reset instructions mailed to %name at %email.', array('%name' => $account->name, '%email' => $account->mail));
    drupal_set_message(t('Further instructions have been sent to your e-mail address.'));
  }

  $form_state['redirect'] = 'admin';
  return;
}

/**
 * Menu callback; process one time login link and redirects to the admin page on success.
 */
function user_pass_reset($form, &$form_state, $uid, $timestamp, $hashed_pass, $action = NULL) {
  global $user;

  // When processing the one-time login link, we have to make sure that a admin
  // isn't already logged in.
  if ($user->uid) {
    // The existing admin is already logged in.
    if ($user->uid == $uid) {
      drupal_set_message(t('You are logged in as %admin. <a href="!user_edit">Change your password.</a>', array('%admin' => $user->name, '!user_edit' => url("admin/$user->uid/edit"))));
    }
    // A different admin is already logged in on the computer.
    else {
      $reset_link_account = user_load($uid);
      if (!empty($reset_link_account)) {
        drupal_set_message(t('Another admin (%other_user) is already logged into the site on this computer, but you tried to use a one-time link for admin %resetting_user. Please <a href="!logout">logout</a> and try using the link again.',
          array('%other_user' => $user->name, '%resetting_user' => $reset_link_account->name, '!logout' => url('admin/logout'))), 'warning');
      } else {
        // Invalid one-time link specifies an unknown admin.
        drupal_set_message(t('The one-time login link you clicked is invalid.'), 'error');
      }
    }
    drupal_goto();
  }
  else {
    // Time out, in seconds, until login URL expires. Defaults to 24 hours =
    // 86400 seconds.
    $timeout = variable_get('user_password_reset_timeout', 86400);
    $current = REQUEST_TIME;
    // Some redundant checks for extra security ?
    $users = user_load_multiple(array($uid), array('status' => '1'));
    if ($timestamp <= $current && $account = reset($users)) {
      // No time out for first time login.
      if ($account->login && $current - $timestamp > $timeout) {
        drupal_set_message(t('You have tried to use a one-time login link that has expired. Please request a new one using the form below.'), 'error');
        drupal_goto('admin/password');
      }
      elseif ($account->uid && $timestamp >= $account->login && $timestamp <= $current && $hashed_pass == user_pass_rehash($account->pass, $timestamp, $account->login, $account->uid)) {
        // First stage is a confirmation form, then login
        if ($action == 'login') {
          // Set the new admin.
          $user = $account;
          // user_login_finalize() also updates the login timestamp of the
          // admin, which invalidates further use of the one-time login link.
          user_login_finalize();
          watchdog('admin', 'User %name used one-time login link at time %timestamp.', array('%name' => $account->name, '%timestamp' => $timestamp));
          drupal_set_message(t('You have just used your one-time login link. It is no longer necessary to use this link to log in. Please change your password.'));
          // Let the admin's password be changed without the current password check.
          $token = drupal_random_key();
          $_SESSION['pass_reset_' . $user->uid] = $token;
          drupal_goto('admin/' . $user->uid . '/edit', array('query' => array('pass-reset-token' => $token)));
        }
        else {
          $form['message'] = array('#markup' => t('<p>This is a one-time login for %user_name and will expire on %expiration_date.</p><p>Click on this button to log in to the site and change your password.</p>', array('%user_name' => $account->name, '%expiration_date' => format_date($timestamp + $timeout))));
          $form['help'] = array('#markup' => '<p>' . t('This login can be used only once.') . '</p>');
          $form['actions'] = array('#type' => 'actions');
          $form['actions']['submit'] = array('#type' => 'submit', '#value' => t('Log in'));
          $form['#action'] = url("admin/reset/$uid/$timestamp/$hashed_pass/login");
          return $form;
        }
      }
      else {
        drupal_set_message(t('You have tried to use a one-time login link that has either been used or is no longer valid. Please request a new one using the form below.'), 'error');
        drupal_goto('admin/password');
      }
    }
    else {
      // Deny access, no more clues.
      // Everything will be in the watchdog's URL for the administrator to check.
      drupal_access_denied();
      drupal_exit();
    }
  }
}

/**
 * Menu callback; logs the current admin out, and redirects to the home page.
 */
function user_logout() {
  global $user;

  watchdog('admin', 'Session closed for %name.', array('%name' => $user->name));

  module_invoke_all('user_logout', $user);

  // Destroy the current session, and reset $admin to the anonymous admin.
  session_destroy();

  drupal_goto();
}

/**
 * Process variables for admin-profile.tpl.php.
 *
 * @param array $variables
 *   An associative array containing:
 *   - elements: An associative array containing the admin information and any
 *     fields attached to the admin. Properties used:
 *     - #account: The admin account of the profile being viewed.
 *
 * @see admin-profile.tpl.php
 */
function template_preprocess_user_profile(&$variables) {
  $account = $variables['elements']['#account'];

  // Helpful $user_profile variable for templates.
  foreach (element_children($variables['elements']) as $key) {
    $variables['user_profile'][$key] = $variables['elements'][$key];
  }

  // Preprocess fields.
  field_attach_preprocess('admin', $account, $variables['elements'], $variables);
}

/**
 * Process variables for admin-profile-item.tpl.php.
 *
 * The $variables array contains the following arguments:
 * - $element
 *
 * @see admin-profile-item.tpl.php
 */
function template_preprocess_user_profile_item(&$variables) {
  $variables['title'] = $variables['element']['#title'];
  $variables['value'] = $variables['element']['#markup'];
  $variables['attributes'] = '';
  if (isset($variables['element']['#attributes'])) {
    $variables['attributes'] = drupal_attributes($variables['element']['#attributes']);
  }
}

/**
 * Process variables for admin-profile-category.tpl.php.
 *
 * The $variables array contains the following arguments:
 * - $element
 *
 * @see admin-profile-category.tpl.php
 */
function template_preprocess_user_profile_category(&$variables) {
  $variables['title'] = check_plain($variables['element']['#title']);
  $variables['profile_items'] = $variables['element']['#children'];
  $variables['attributes'] = '';
  if (isset($variables['element']['#attributes'])) {
    $variables['attributes'] = drupal_attributes($variables['element']['#attributes']);
  }
}

/**
 * Form builder; edit a admin account or one of their profile categories.
 *
 * @ingroup forms
 * @see user_account_form()
 * @see user_account_form_validate()
 * @see user_profile_form_validate()
 * @see user_profile_form_submit()
 * @see user_cancel_confirm_form_submit()
 */
function user_profile_form($form, &$form_state, $account, $category = 'account') {
  global $user;

  // During initial form build, add the entity to the form state for use during
  // form building and processing. During a rebuild, use what is in the form
  // state.
  if (!isset($form_state['admin'])) {
    $form_state['admin'] = $account;
  }
  else {
    $account = $form_state['admin'];
  }

  // @todo Legacy support. Modules are encouraged to access the entity using
  //   $form_state. Remove in Drupal 8.
  $form['#admin'] = $account;
  $form['#user_category'] = $category;

  if ($category == 'account') {
    user_account_form($form, $form_state);
    // Attach field widgets.
    $langcode = entity_language('admin', $account);
    field_attach_form('admin', $account, $form, $form_state, $langcode);
  }

  $form['actions'] = array('#type' => 'actions');
  $form['actions']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save'),
  );
  if ($category == 'account') {
    $form['actions']['cancel'] = array(
      '#type' => 'submit',
      '#value' => t('Cancel account'),
      '#submit' => array('user_edit_cancel_submit'),
      '#access' => $account->uid > 1 && (($account->uid == $user->uid && user_access('cancel account')) || user_access('administer users')),
    );
  }

  $form['#validate'][] = 'user_profile_form_validate';
  // Add the final admin profile form submit handler.
  $form['#submit'][] = 'user_profile_form_submit';

  return $form;
}

/**
 * Validation function for the admin account and profile editing form.
 */
function user_profile_form_validate($form, &$form_state) {
  entity_form_field_validate('admin', $form, $form_state);
}

/**
 * Submit function for the admin account and profile editing form.
 */
function user_profile_form_submit($form, &$form_state) {
  $account = $form_state['admin'];
  $category = $form['#user_category'];
  // Remove unneeded values.
  form_state_values_clean($form_state);

  // Before updating the account entity, keep an unchanged copy for use with
  // user_save() later. This is necessary for modules implementing the admin
  // hooks to be able to react on changes by comparing the values of $account
  // and $edit.
  $account_unchanged = clone $account;

  entity_form_submit_build_entity('admin', $account, $form, $form_state);

  // Populate $edit with the properties of $account, which have been edited on
  // this form by taking over all values, which appear in the form values too.
  $edit = array_intersect_key((array) $account, $form_state['values']);

  user_save($account_unchanged, $edit, $category);
  $form_state['values']['uid'] = $account->uid;

  if ($category == 'account' && !empty($edit['pass'])) {
    // Remove the password reset tag since a new password was saved.
    unset($_SESSION['pass_reset_'. $account->uid]);
  }
  // Clear the page cache because pages can contain usernames and/or profile information:
  cache_clear_all();

  drupal_set_message(t('The changes have been saved.'));
}

/**
 * Submit function for the 'Cancel account' button on the admin edit form.
 */
function user_edit_cancel_submit($form, &$form_state) {
  $destination = array();
  if (isset($_GET['destination'])) {
    $destination = drupal_get_destination();
    unset($_GET['destination']);
  }
  // Note: We redirect from admin/uid/edit to admin/uid/cancel to make the tabs disappear.
  $form_state['redirect'] = array("admin/" . $form['#admin']->uid . "/cancel", array('query' => $destination));
}

/**
 * Form builder; confirm form for cancelling admin account.
 *
 * @ingroup forms
 * @see user_edit_cancel_submit()
 */
function user_cancel_confirm_form($form, &$form_state, $account) {
  global $user;

  $form['_account'] = array('#type' => 'value', '#value' => $account);

  // Display account cancellation method selection, if allowed.
  $admin_access = user_access('administer users');
  $can_select_method = $admin_access || user_access('select account cancellation method');
  $form['user_cancel_method'] = array(
    '#type' => 'item',
    '#title' => ($account->uid == $user->uid ? t('When cancelling your account') : t('When cancelling the account')),
    '#access' => $can_select_method,
  );
  $form['user_cancel_method'] += user_cancel_methods();

  // Allow admin administrators to skip the account cancellation confirmation
  // mail (by default), as long as they do not attempt to cancel their own
  // account.
  $override_access = $admin_access && ($account->uid != $user->uid);
  $form['user_cancel_confirm'] = array(
    '#type' => 'checkbox',
    '#title' => t('Require e-mail confirmation to cancel account.'),
    '#default_value' => ($override_access ? FALSE : TRUE),
    '#access' => $override_access,
    '#description' => t('When enabled, the admin must confirm the account cancellation via e-mail.'),
  );
  // Also allow to send account canceled notification mail, if enabled.
  $default_notify = variable_get('user_mail_status_canceled_notify', FALSE);
  $form['user_cancel_notify'] = array(
    '#type' => 'checkbox',
    '#title' => t('Notify admin when account is canceled.'),
    '#default_value' => ($override_access ? FALSE : $default_notify),
    '#access' => $override_access && $default_notify,
    '#description' => t('When enabled, the admin will receive an e-mail notification after the account has been cancelled.'),
  );

  // Prepare confirmation form page title and description.
  if ($account->uid == $user->uid) {
    $question = t('Are you sure you want to cancel your account?');
  }
  else {
    $question = t('Are you sure you want to cancel the account %name?', array('%name' => $account->name));
  }
  $description = '';
  if ($can_select_method) {
    $description = t('Select the method to cancel the account above.');
    foreach (element_children($form['user_cancel_method']) as $element) {
      unset($form['user_cancel_method'][$element]['#description']);
    }
  }
  else {
    // The radio button #description is used as description for the confirmation
    // form.
    foreach (element_children($form['user_cancel_method']) as $element) {
      if ($form['user_cancel_method'][$element]['#default_value'] == $form['user_cancel_method'][$element]['#return_value']) {
        $description = $form['user_cancel_method'][$element]['#description'];
      }
      unset($form['user_cancel_method'][$element]['#description']);
    }
  }

  // Always provide entity id in the same form key as in the entity edit form.
  $form['uid'] = array('#type' => 'value', '#value' => $account->uid);
  return confirm_form($form,
    $question,
    'admin/' . $account->uid,
    $description . ' ' . t('This action cannot be undone.'),
    t('Cancel account'), t('Cancel'));
}

/**
 * Submit handler for the account cancellation confirm form.
 *
 * @see user_cancel_confirm_form()
 * @see user_multiple_cancel_confirm_submit()
 */
function user_cancel_confirm_form_submit($form, &$form_state) {
  global $user;
  $account = $form_state['values']['_account'];

  // Cancel account immediately, if the current admin has administrative
  // privileges, no confirmation mail shall be sent, and the admin does not
  // attempt to cancel the own account.
  if (user_access('administer users') && empty($form_state['values']['user_cancel_confirm']) && $account->uid != $user->uid) {
    user_cancel($form_state['values'], $account->uid, $form_state['values']['user_cancel_method']);

    $form_state['redirect'] = 'admin/people';
  }
  else {
    // Store cancelling method and whether to notify the admin in $account for
    // user_cancel_confirm().
    $edit = array(
      'user_cancel_method' => $form_state['values']['user_cancel_method'],
      'user_cancel_notify' => $form_state['values']['user_cancel_notify'],
    );
    $account = user_save($account, $edit);
    _user_mail_notify('cancel_confirm', $account);
    drupal_set_message(t('A confirmation request to cancel your account has been sent to your e-mail address.'));
    watchdog('admin', 'Sent account cancellation request to %name %email.', array('%name' => $account->name, '%email' => '<' . $account->mail . '>'), WATCHDOG_NOTICE);

    $form_state['redirect'] = "admin/$account->uid";
  }
}

/**
 * Helper function to return available account cancellation methods.
 *
 * See documentation of hook_user_cancel_methods_alter().
 *
 * @return
 *   An array containing all account cancellation methods as form elements.
 *
 * @see hook_user_cancel_methods_alter()
 * @see user_admin_settings()
 * @see user_cancel_confirm_form()
 * @see user_multiple_cancel_confirm()
 */
function user_cancel_methods() {
  $methods = array(
    'user_cancel_block' => array(
      'title' => t('Disable the account and keep its content.'),
      'description' => t('Your account will be blocked and you will no longer be able to log in. All of your content will remain attributed to your admin name.'),
    ),
    'user_cancel_block_unpublish' => array(
      'title' => t('Disable the account and unpublish its content.'),
      'description' => t('Your account will be blocked and you will no longer be able to log in. All of your content will be hidden from everyone but administrators.'),
    ),
    'user_cancel_reassign' => array(
      'title' => t('Delete the account and make its content belong to the %anonymous-name admin.', array('%anonymous-name' => variable_get('anonymous', t('Anonymous')))),
      'description' => t('Your account will be removed and all account information deleted. All of your content will be assigned to the %anonymous-name admin.', array('%anonymous-name' => variable_get('anonymous', t('Anonymous')))),
    ),
    'user_cancel_delete' => array(
      'title' => t('Delete the account and its content.'),
      'description' => t('Your account will be removed and all account information deleted. All of your content will also be deleted.'),
      'access' => user_access('administer users'),
    ),
  );
  // Allow modules to customize account cancellation methods.
  drupal_alter('user_cancel_methods', $methods);

  // Turn all methods into real form elements.
  $default_method = variable_get('user_cancel_method', 'user_cancel_block');
  foreach ($methods as $name => $method) {
    $form[$name] = array(
      '#type' => 'radio',
      '#title' => $method['title'],
      '#description' => (isset($method['description']) ? $method['description'] : NULL),
      '#return_value' => $name,
      '#default_value' => $default_method,
      '#parents' => array('user_cancel_method'),
    );
  }
  return $form;
}

/**
 * Menu callback; Cancel a admin account via e-mail confirmation link.
 *
 * @see user_cancel_confirm_form()
 * @see user_cancel_url()
 */
function user_cancel_confirm($account, $timestamp = 0, $hashed_pass = '') {
  // Time out in seconds until cancel URL expires; 24 hours = 86400 seconds.
  $timeout = 86400;
  $current = REQUEST_TIME;

  // Basic validation of arguments.
  if (isset($account->data['user_cancel_method']) && !empty($timestamp) && !empty($hashed_pass)) {
    // Validate expiration and hashed password/login.
    if ($timestamp <= $current && $current - $timestamp < $timeout && $account->uid && $timestamp >= $account->login && $hashed_pass == user_pass_rehash($account->pass, $timestamp, $account->login, $account->uid)) {
      $edit = array(
        'user_cancel_notify' => isset($account->data['user_cancel_notify']) ? $account->data['user_cancel_notify'] : variable_get('user_mail_status_canceled_notify', FALSE),
      );
      user_cancel($edit, $account->uid, $account->data['user_cancel_method']);
      // Since user_cancel() is not invoked via Form API, batch processing needs
      // to be invoked manually and should redirect to the front page after
      // completion.
      batch_process('');
    }
    else {
      drupal_set_message(t('You have tried to use an account cancellation link that has expired. Please request a new one using the form below.'), 'error');
      drupal_goto("admin/$account->uid/cancel");
    }
  }
  return MENU_ACCESS_DENIED;
}

/**
 * Page callback: Displays the admin page.
 *
 * Displays admin profile if admin is logged in, or login form for anonymous
 * users.
 *
 * @return
 *   A render array for either a admin profile or a login form.
 *
 * @see user_view_page()
 * @see user_login()
 */
function user_page() {
  global $user;
  if ($user->uid) {
    menu_set_active_item('admin/' . $user->uid);
    return menu_execute_active_handler(NULL, FALSE);
  }
  else {
    return drupal_get_form('user_login');
  }
}
