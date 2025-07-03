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
import { SelectControl, TextControl, PanelBody } from '@wordpress/components';

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
export default function Edit({attributes, setAttributes}) {
	const {selectedStyles, callToAction, path} = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Call To Action Settings', 'cta-button')}>
					<p>
						{ __(
							'Here you can customize the call-to-action button.',
							'cta-button'
						) }
					</p>
					<TextControl
						label={__('Add Your Call-To-Action', 'cta-button')}
						value={callToAction}
						onChange={(value) => setAttributes({callToAction: value})}
					/>
					<TextControl
						label={__('Set Target Page', 'cta-button')}
						help={__('This will set as navigation for the button', 'cta-button')}
						value={path}
						onChange={(value) => setAttributes({path: `/${value}`})}
					/>
					<SelectControl
						label={__('Choose the style', 'cta-button')}
						value={selectedStyles}
						options={[
							{
								label: "Boxed Button",
								value: "boxed"
							},
							{
								label: "Underline Button",
								value: "underline"
							}
						]}
						onChange={(value) => setAttributes({selectedStyles: value})}
					/>
				</PanelBody>
			</InspectorControls>
			{selectedStyles === "boxed" ? 
				<>
					<div {...useBlockProps({className: `ss-cta--${selectedStyles}`})}>
						{callToAction}
					</div>
				</> : 
				<>
					<div {...useBlockProps({className: `ss-cta--${selectedStyles}`})}>
						{callToAction}
					</div>
				</>
			}
		</>
	);
}
