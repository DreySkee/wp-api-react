<?php
/**
 * Wondersauce functions and definitions
 */

if( function_exists('acf_add_options_page') ) {
  acf_add_options_page(array(
    'page_title'  => 'Main Menu',
    'menu_title'  => 'Main Menu',
    'menu_slug'   => 'main-menu',
    'capability'  => 'edit_posts',
    'redirect'    => false,
    'position'    => 3,
    'icon_url' => 'dashicons-screenoptions'
  ));
}

if( function_exists('acf_add_options_page') ) {
  acf_add_options_page(array(
    'page_title'  => 'Global Settings',
    'menu_title'  => 'Global Settings',
    'menu_slug'   => 'global-settings',
    'capability'  => 'edit_posts',
    'redirect'    => true,
    'position'    => 2,
    'icon_url' => 'dashicons-admin-site',
  ));
  
  acf_add_options_sub_page(array(
    'page_title'  => 'SEO',
    'menu_title'  => 'SEO',
    'parent_slug' => 'global-settings',
  )); 

  acf_add_options_sub_page(array(
    'page_title'  => 'Social',
    'menu_title'  => 'Social',
    'parent_slug' => 'global-settings',
  ));  

  acf_add_options_sub_page(array(
    'page_title'  => '404',
    'menu_title'  => '404',
    'parent_slug' => 'global-settings',
  ));  
}

add_action( 'admin_init', 'hide_editor' );
function hide_editor(){
    remove_post_type_support('page', 'editor');   
}
