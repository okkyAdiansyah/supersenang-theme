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
import {
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
	MediaPlaceholder,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import DefaultMedia from '../../assets/footer-logo.png';

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
export default function Edit( { setAttributes, attributes } ) {
	const { mediaID, mediaURL } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Footer Logo Setting', 'supersenang' ) }>
					<p>
						{ __(
							'Here you can customize the footer logo.',
							'supersenang'
						) }
					</p>
					<MediaPlaceholder
						onSelect={ ( el ) =>
							setAttributes( {
								mediaURL: el.url,
								mediaID: el.id,
							} )
						}
						allowedTypes={ [ 'image' ] }
						multiple={ false }
						labels={ { title: __( 'Footer Logo' ) } }
						mediaPreview={
							<>
								<div>
									<img src={ mediaURL } />
								</div>
							</>
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{ ...useBlockProps( {
					className: 'ss-footer-logo-container',
				} ) }
			>
				<img src={ ! mediaURL ? DefaultMedia : mediaURL } />
			</div>
		</>
	);
}
