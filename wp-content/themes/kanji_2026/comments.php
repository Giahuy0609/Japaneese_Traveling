<?php
/**
 * The template for displaying comments.
 *
 * @package Kanji_2026
 */

if ( post_password_required() ) {
	return;
}
?>
<section id="comments" class="comments-area">
	<?php if ( have_comments() ) : ?>
		<h2 class="comments-title">
			<?php
			$comment_count = get_comments_number();
			printf(
				esc_html(
					_n(
						'%1$s comment',
						'%1$s comments',
						$comment_count,
						'kanji-2026'
					)
				),
				esc_html( number_format_i18n( $comment_count ) )
			);
			?>
		</h2>
		<ol class="comment-list">
			<?php
			wp_list_comments(
				array(
					'style'      => 'ol',
					'short_ping' => true,
				)
			);
			?>
		</ol>
		<?php the_comments_navigation(); ?>
	<?php endif; ?>

	<?php
	if ( ! comments_open() && get_comments_number() ) {
		echo '<p class="no-comments">' . esc_html__( 'Comments are closed.', 'kanji-2026' ) . '</p>';
	}

	comment_form();
	?>
</section>