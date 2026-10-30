<?php
/**
 * Template part for displaying a message when no content is found.
 *
 * @package Kanji_2026
 */
?>
<section class="no-results not-found">
	<header class="page-header">
		<h1 class="page-title"><?php esc_html_e( 'Nothing found', 'kanji-2026' ); ?></h1>
	</header>
	<div class="page-content">
		<p><?php esc_html_e( 'No content matched your request. Try a search below.', 'kanji-2026' ); ?></p>
		<?php get_search_form(); ?>
	</div>
</section>