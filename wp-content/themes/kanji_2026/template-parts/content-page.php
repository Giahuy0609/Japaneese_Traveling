<?php
/**
 * Template part for displaying pages.
 *
 * @package Kanji_2026
 */
?>
<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry' ); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header>
	<div class="entry-content">
		<?php
		the_content();
		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'kanji-2026' ),
				'after'  => '</div>',
			)
		);
		?>
	</div>
</article>