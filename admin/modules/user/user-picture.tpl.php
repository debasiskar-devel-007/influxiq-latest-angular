<?php

/**
 * @file
 * Default theme implementation to present a picture configured for the
 * admin's account.
 *
 * Available variables:
 * - $user_picture: Image set by the admin or the site's default. Will be linked
 *   depending on the viewer's permission to view the admin's profile page.
 * - $account: Array of account information. Potentially unsafe. Be sure to
 *   check_plain() before use.
 *
 * @see template_preprocess_user_picture()
 *
 * @ingroup themeable
 */
?>
<?php if ($user_picture): ?>
  <div class="<?php print $classes; ?>">
    <?php print $user_picture; ?>
  </div>
<?php endif; ?>
