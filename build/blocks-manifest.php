<?php
// This file is generated. Do not modify it manually.
return array(
	'cta-button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'cta-button/cta-button',
		'version' => '0.1.0',
		'title' => 'CTA Button',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'CTA Button with style that you can choose.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'path' => array(
				'type' => 'string',
				'default' => '/'
			),
			'selectedStyles' => array(
				'type' => 'string',
				'default' => 'boxed'
			),
			'callToAction' => array(
				'type' => 'string',
				'default' => 'Your Call-To-Action'
			)
		),
		'textdomain' => 'cta-button',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'custom-site-title' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'custom-title-block/custom-site-title',
		'version' => '0.1.0',
		'title' => 'Custom Site Title',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'custom-site-title',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'menu-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'supersenang/menu-block',
		'version' => '0.1.0',
		'title' => 'Menu Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Menu Block to Scaffold Header Navigation or Footer Navigation',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'selectedMenu' => array(
				'type' => 'integer'
			),
			'selectedStyles' => array(
				'type' => 'object',
				'default' => array(
					'key' => 'main-style',
					'name' => 'Main Style',
					'variant' => 'main'
				)
			)
		),
		'textdomain' => 'menu-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
