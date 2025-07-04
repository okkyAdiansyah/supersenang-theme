<?php
$menu_id = $attributes['selectedMenu'] ?? null;
$menu_items = $menu_id ? wp_get_nav_menu_items( $menu_id ) : [];

?>
<ul class="ss-menu-container ss-menu--<?php echo esc_html( $attributes["selectedStyles"]["variant"]); ?>" <?php echo get_block_wrapper_attributes(); ?>>
    <?php if ( ! empty( $menu_items ) ) :
	foreach ( $menu_items as $item ) : ?>
		<li class="ss-menu-item--<?php echo esc_html( $attributes["selectedStyles"]["variant"]); ?>">
			<a href="<?php echo esc_url( $item->url ); ?>">
				<?php echo esc_html( $item->title ); ?>
			</a>
		</li>
	<?php endforeach; ?>
    <?php else : ?>
        <p>No menu items found.</p>
    <?php endif; ?>
</ul>

