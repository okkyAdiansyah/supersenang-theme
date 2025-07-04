/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

import DefaultMedia from '../../assets/footer-logo.png';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const { mediaURL } = attributes;
	return (
		<a
			{ ...useBlockProps.save( {
				className: 'ss-footer-logo-container',
			} ) }
			href="/"
		>
			<img src={ ! mediaURL ? DefaultMedia : mediaURL } />
		</a>
	);
}
