<?php

/**
 * Load admin Scripts
 */
add_action('admin_enqueue_scripts', 'better_dev_load_scripts', 101);
function better_dev_load_scripts() {
  $screen = get_current_screen();

  if ( !isset($screen) || $screen->base != 'post') {
      return;
  }
  wp_enqueue_script('better-dev-editor', EASY_MARKDOWN_URLPATH . 'better-editor.js');
}

/**
 * Load frontend Scripts
 */
function better_dev_load_frontend_scripts($hook) {
    wp_enqueue_script('prism', EASY_MARKDOWN_URLPATH . 'js/prism.js');
    wp_register_style('prism', EASY_MARKDOWN_URLPATH . 'css/prism.css');
    wp_enqueue_style ('prism');
}
add_action('wp_enqueue_scripts', 'better_dev_load_frontend_scripts');