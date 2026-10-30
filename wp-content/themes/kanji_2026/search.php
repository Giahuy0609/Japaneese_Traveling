<?php
/**
 * The template for displaying search results.
 *
 * @package Kanji_2026
 */

get_header();
?>
<main id="primary" class="site-main">
	<header class="page-header">
		<h1 class="page-title">
			<?php
			printf(
				esc_html__( 'Search Results for: %s', 'kanji-2026' ),
				'<span>' . esc_html( get_search_query() ) . '</span>'
			);
			?>
		</h1>
	</header>
	<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>
			<?php get_template_part( 'template-parts/content', get_post_type() ); ?>
		<?php endwhile; ?>
		<?php the_posts_pagination(); ?>
	<?php else : ?>
		<?php get_template_part( 'template-parts/content', 'none' ); ?>
	<?php endif; ?>
</main>
<?php
get_footer();