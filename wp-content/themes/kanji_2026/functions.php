<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function kanji_2026_setup() {
	load_theme_textdomain( 'kanji-2026', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support(
		'html5',
		array(
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'search-form',
			'script',
			'style',
		)
	);
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 120,
			'width'       => 320,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);
	add_theme_support( 'customize-selective-refresh-widgets' );

	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'kanji-2026' ),
			'footer'  => __( 'Footer Menu', 'kanji-2026' ),
		)
	);
}
add_action( 'after_setup_theme', 'kanji_2026_setup' );

function kanji_2026_enqueue_assets() {
	$theme_version = wp_get_theme()->get( 'Version' );
	$stylesheet    = get_theme_file_path( '/assets/css/theme.css' );
	$version       = file_exists( $stylesheet ) ? (string) filemtime( $stylesheet ) : $theme_version;

	// Enqueue Google Fonts matching landing page
	wp_enqueue_style(
		'kanji-2026-fonts',
		'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Noto+Serif+JP:wght@300;400;600;700;900&display=swap',
		array(),
		null
	);

	wp_enqueue_style(
		'kanji-2026-theme',
		get_theme_file_uri( '/assets/css/theme.css' ),
		array( 'kanji-2026-fonts' ),
		$version
	);

	if ( is_front_page() ) {
		$demo_stylesheet = get_theme_file_path( '/assets/css/kanji-demo.css' );
		$demo_script     = get_theme_file_path( '/assets/js/kanji-demo.js' );

		wp_enqueue_style(
			'kanji-2026-demo',
			get_theme_file_uri( '/assets/css/kanji-demo.css' ),
			array( 'kanji-2026-theme' ),
			file_exists( $demo_stylesheet ) ? (string) filemtime( $demo_stylesheet ) : $theme_version
		);

		wp_enqueue_script(
			'kanji-2026-demo',
			get_theme_file_uri( '/assets/js/kanji-demo.js' ),
			array(),
			file_exists( $demo_script ) ? (string) filemtime( $demo_script ) : $theme_version,
			true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'kanji_2026_enqueue_assets' );
