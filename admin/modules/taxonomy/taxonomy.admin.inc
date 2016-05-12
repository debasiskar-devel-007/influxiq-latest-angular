<?php

/**
 * @file
 * Administrative page callbacks for the taxonomy module.
 */

/**
 * Form builder to list and manage vocabularies.
 *
 * @ingroup forms
 * @see taxonomy_overview_vocabularies_submit()
 * @see theme_taxonomy_overview_vocabularies()
 */
function taxonomy_overview_vocabularies($form) {
  $vocabularies = taxonomy_get_vocabularies();
  $form['#tree'] = TRUE;
  foreach ($vocabularies as $vocabulary) {
    $form[$vocabulary->vid]['#vocabulary'] = $vocabulary;
    $form[$vocabulary->vid]['name'] = array('#markup' => check_plain($vocabulary->name));
    $form[$vocabulary->vid]['weight'] = array(
      '#type' => 'weight',
      '#title' => t('Weight for @title', array('@title' => $vocabulary->name)),
      '#title_display' => 'invisible',
      '#delta' => 10,
      '#default_value' => $vocabulary->weight,
    );
    $form[$vocabulary->vid]['edit'] = array('#type' => 'link', '#title' => t('edit vocabulary'), '#href' => "admin/structure/taxonomy/$vocabulary->machine_name/edit");
    $form[$vocabulary->vid]['list'] = array('#type' => 'link', '#title' => t('list terms'), '#href' => "admin/structure/taxonomy/$vocabulary->machine_name");
    $form[$vocabulary->vid]['add'] = array('#type' => 'link', '#title' => t('add terms'), '#href' => "admin/structure/taxonomy/$vocabulary->machine_name/add");
  }

  // Only make this form include a submit button and weight if more than one
  // vocabulary exists.
  if (count($vocabularies) > 1) {
    $form['actions'] = array('#type' => 'actions');
    $form['actions']['submit'] = array('#type' => 'submit', '#value' => t('Save'));
  }
  elseif (isset($vocabulary)) {
    unset($form[$vocabulary->vid]['weight']);
  }
  return $form;
}

/**
 * Submit handler for vocabularies overview. Updates changed vocabulary weights.
 *
 * @see taxonomy_overview_vocabularies()
 */
function taxonomy_overview_vocabularies_submit($form, &$form_state) {
  foreach ($form_state['values'] as $vid => $vocabulary) {
    if (is_numeric($vid) && $form[$vid]['#vocabulary']->weight != $form_state['values'][$vid]['weight']) {
      $form[$vid]['#vocabulary']->weight = $form_state['values'][$vid]['weight'];
      taxonomy_vocabulary_save($form[$vid]['#vocabulary']);
    }
  }
  drupal_set_message(t('The configuration options have been saved.'));
}

/**
 * Returns HTML for the vocabulary overview form as a sortable list of vocabularies.
 *
 * @param $variables
 *   An associative array containing:
 *   - form: A render element representing the form.
 *
 * @see taxonomy_overview_vocabularies()
 * @ingroup themeable
 */
function theme_taxonomy_overview_vocabularies($variables) {
  $form = $variables['form'];

  $rows = array();

  foreach (element_children($form) as $key) {
    if (isset($form[$key]['name'])) {
      $vocabulary = &$form[$key];

      $row = array();
      $row[] = drupal_render($vocabulary['name']);
      if (isset($vocabulary['weight'])) {
        $vocabulary['weight']['#attributes']['class'] = array('vocabulary-weight');
        $row[] = drupal_render($vocabulary['weight']);
      }
      $row[] = drupal_render($vocabulary['edit']);
      $row[] = drupal_render($vocabulary['list']);
      $row[] = drupal_render($vocabulary['add']);
      $rows[] = array('data' => $row, 'class' => array('draggable'));
    }
  }

  $header = array(t('Vocabulary name'));
  if (isset($form['actions'])) {
    $header[] = t('Weight');
    drupal_add_tabledrag('taxonomy', 'order', 'sibling', 'vocabulary-weight');
  }
  $header[] = array('data' => t('Operations'), 'colspan' => '3');
  return theme('table', array('header' => $header, 'rows' => $rows, 'empty' => t('No vocabularies available. <a href="@link">Add vocabulary</a>.', array('@link' => url('admin/structure/taxonomy/add'))), 'attributes' => array('id' => 'taxonomy'))) . drupal_render_children($form);
}

/**
 * Form builder for the vocabulary editing form.
 *
 * @ingroup forms
 * @see taxonomy_form_vocabulary_submit()
 * @see taxonomy_form_vocabulary_validate()
 */
function taxonomy_form_vocabulary($form, &$form_state, $edit = array()) {
  // During initial form build, add the entity to the form state for use
  // during form building and processing. During a rebuild, use what is in the
  // form state.
  if (!isset($form_state['vocabulary'])) {
    $vocabulary = is_object($edit) ? $edit : (object) $edit;
    $defaults = array(
      'name' => '',
      'machine_name' => '',
      'description' => '',
      'hierarchy' => 0,
      'weight' => 0,
    );
    foreach ($defaults as $key => $value) {
      if (!isset($vocabulary->$key)) {
        $vocabulary->$key = $value;
      }
    }
    $form_state['vocabulary'] = $vocabulary;
  }
  else {
    $vocabulary = $form_state['vocabulary'];
  }

  // @todo Legacy support. Modules are encouraged to access the entity using
  //   $form_state. Remove in Drupal 8.
  $form['#vocabulary'] = $form_state['vocabulary'];

  // Check whether we need a deletion confirmation form.
  if (isset($form_state['confirm_delete']) && isset($form_state['values']['vid'])) {
    return taxonomy_vocabulary_confirm_delete($form, $form_state, $form_state['values']['vid']);
  }
  $form['name'] = array(
    '#type' => 'textfield',
    '#title' => t('Name'),
    '#default_value' => $vocabulary->name,
    '#maxlength' => 255,
    '#required' => TRUE,
  );
  $form['machine_name'] = array(
    '#type' => 'machine_name',
    '#default_value' => $vocabulary->machine_name,
    '#maxlength' => 255,
    '#machine_name' => array(
      'exists' => 'taxonomy_vocabulary_machine_name_load',
    ),
  );
  $form['old_machine_name'] = array(
    '#type' => 'value',
    '#value' => $vocabulary->machine_name,
  );
  $form['description'] = array(
    '#type' => 'textfield',
    '#title' => t('Description'),
    '#default_value' => $vocabulary->description,
  );
  // Set the hierarchy to "multiple parents" by default. This simplifies the
  // vocabulary form and standardizes the term form.
  $form['hierarchy'] = array(
    '#type' => 'value',
    '#value' => '0',
  );

  $form['actions'] = array('#type' => 'actions');
  $form['actions']['submit'] = array('#type' => 'submit', '#value' => t('Save'));
  if (isset($vocabulary->vid)) {
    $form['actions']['delete'] = array('#type' => 'submit', '#value' => t('Delete'));
    $form['vid'] = array('#type' => 'value', '#value' => $vocabulary->vid);
    $form['module'] = array('#type' => 'value', '#value' => $vocabulary->module);
  }
  $form['#validate'][] = 'taxonomy_form_vocabulary_validate';

  return $form;
}

/**
 * Form validation handler for taxonomy_form_vocabulary().
 *
 * Makes sure that the machine name of the vocabulary is not in the
 * disallowed list (names that conflict with menu items, such as 'list'
 * and 'add').
 *
 * @see taxonomy_form_vocabulary()
 * @see taxonomy_form_vocabulary_submit()
 */
function taxonomy_form_vocabulary_validate($form, &$form_state) {
  // During the deletion there is no 'machine_name' key
  if (isset($form_state['values']['machine_name'])) {
    // Do not allow machine names to conflict with taxonomy path arguments.
    $machine_name = $form_state['values']['machine_name'];
    $disallowed = array('add', 'list');
    if (in_array($machine_name, $disallowed)) {
     