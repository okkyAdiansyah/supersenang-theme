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
import { TextControl, PanelBody } from '@wordpress/components';

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
	const { socmedName, socmedLink } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody
					label={ __(
						'Social Media Connect Setting',
						'social-media-connect'
					) }
				>
					<p>
						{ __(
							'Here you can customize your social media link',
							'social-media-connect'
						) }
					</p>
					<TextControl
						label={ __(
							'Add Social Media Name',
							'social-media-connect'
						) }
						value={ socmedName }
						type="text"
						onChange={ ( value ) =>
							setAttributes( { socmedName: value } )
						}
					/>
					<TextControl
						label={ __(
							'Add Social Media Link',
							'social-media-connect'
						) }
						value={ socmedLink }
						type="text"
						onChange={ ( value ) =>
							setAttributes( { socmedLink: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps( { className: 'ss-socmed-link' } ) }>
				{ socmedName }
			</p>
		</>
	);
}
