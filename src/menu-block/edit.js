/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	CustomSelectControl,
	SelectControl,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from 'react';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const [ menus, setMenus ] = useState( [] );
	const [ menuItems, setMenuItems ] = useState( [] );
	const { selectedMenu, selectedStyles } = attributes;

	// Initiate menu option
	useEffect( () => {
		let fetch = async () => {
			try {
				const data = await apiFetch( {
					path: '/wp/v2/menus',
					method: 'GET',
				} );
				const formatted = data.map( ( item ) => ( {
					menuID: item.id,
					menuSlug: item.slug,
					menuName: item.name,
				} ) );
				setMenus( formatted );

				if ( ! selectedMenu && formatted.length > 0 ) {
					setAttributes( { selectedMenu: formatted[ 0 ].menuID } );
				}
			} catch ( error ) {
				console.error( error );
			}
		};

		fetch();
	}, [] );

	// Initiate menu items
	useEffect( () => {
		if ( ! selectedMenu ) return;
		let fetch = async () => {
			try {
				const data = await apiFetch( {
					path: 'wp/v2/menu-items',
					method: 'GET',
				} );
				const filtered = data.filter(
					( item ) => item.menus === selectedMenu
				);
				setMenuItems( filtered );
			} catch ( error ) {
				console.error( error );
			}
		};

		fetch();
	}, [ selectedMenu ] );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Banner Settings', 'banner' ) }>
					<p>
						{ __(
							'Here you can add settings for the banner block.',
							'banner'
						) }
					</p>
					<SelectControl
						label={ __( 'Select Menu', 'supersenang' ) }
						options={ menus.map( ( option ) => ( {
							label: option.menuName,
							value: option.menuID,
						} ) ) }
						value={ selectedMenu }
						onChange={ ( value ) =>
							setAttributes( { selectedMenu: parseInt( value ) } )
						}
					/>
					<CustomSelectControl
						label={ __( 'Select Prefered Styles', 'supersenang' ) }
						options={ [
							{
								key: 'main-style',
								name: 'Main Style',
								variant: 'main',
							},
							{
								key: 'sec-style',
								name: 'Secondary Style',
								variant: 'sec',
							},
						] }
						value={ selectedStyles }
						onChange={ ( newValue ) =>
							setAttributes( {
								selectedStyles: newValue.selectedItem,
							} )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<ul
				{ ...useBlockProps( {
					className: `ss-menu-container ss-menu--${ selectedStyles.variant }`,
				} ) }
			>
				{ menuItems.map( ( item, id ) => (
					<li
						className={ `ss-menu-item--${ selectedStyles.variant }` }
						key={ `item-${ id }` }
					>
						{ item.title.rendered }
					</li>
				) ) }
			</ul>
		</>
	);
}
