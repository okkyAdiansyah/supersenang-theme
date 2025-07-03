<?php

/**
 * Register block type in the theme.
 * This function is used to register the block type in the theme.
 * It is called when the theme is initialized.
 */

function supersenang_register_block_type() {
    /**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'supersenang_register_block_type' );

/**
 * Enqueue main stylesheet 
 * 
 * This function is used to enqueue the main stylesheet for theme.
 * Called when the theme is setup.
 */
function supersenang_enqueue_styles(){
	wp_enqueue_style( 'supersenang-main-style', get_template_directory_uri(  ) . '/main.css', array( ), wp_get_theme(  )->get( 'Version' ), 'all' );
	wp_enqueue_style( 'supersenang-theme-style', get_template_directory_uri(  ) . '/assets/css/theme-style.css', array( ), wp_get_theme(  )->get( 'Version' ), 'all' );
}
add_action( 'wp_enqueue_scripts', 'supersenang_enqueue_styles' );

/**
 * Theme support
 * This function is used to add theme support for various features.
 * Called when the theme is setup.
 */
function supersenang_theme_support() {
	/**
	 * Add default posts and comments RSS feed links to head.
	 */
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/reference/functions/add_theme_support/#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );

    /**
     * Enable menu creation support
     */
    add_theme_support( 'menus' );

	/**
	 * Enable support for site logo.
	 */
	add_theme_support(
		'custom-logo',
		apply_filters(
			'supersenang_custom_logo_args',
			array(
				'height'      => 110,
				'width'       => 470,
				'flex-width'  => true,
				'flex-height' => true,
			)
		)
    );

	/*
	 * Switch default core markup for search form, comment form, comments, galleries, captions andwidgets
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		apply_filters(
			'supersenang_html5_args',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'widgets',
				'style',
				'script',
			)
		)
    );
	
	/**
	 * Declare support for title theme feature.
	 */
	add_theme_support( 'title-tag' );

	/**
	 * Declare support for selective refreshing of widgets.
	 */
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for full and wide align images.
	 */
	add_theme_support( 'align-wide' );
	
	/**
	 * Add support for editor styles.
	 */
	add_theme_support( 'editor-styles' );

	/**
	 * Add support for responsive embedded content.
	 */
	add_theme_support( 'responsive-embeds' );
}
add_action( 'after_setup_theme', 'supersenang_theme_support' );