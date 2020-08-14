import Alert from './alert';
import $ from 'jquery';
import '../css/app.css';

/**
 * Simple (ugly) code to handle the comment vote up/down
 */
$('.js-comment-vote').on('click', async function (e) {
  e.preventDefault();
  const $button = $(e.currentTarget);
  const $container = $button.closest('.js-vote-arrows');

  const data = await $.ajax({
    url: $container.data('url'),
    data: JSON.stringify({
      direction: $button.data('direction')
    }),
    method: 'POST'
  });

  $container.find('.js-vote-total').text(data.votes);
  const voteAlert = new Alert('Vote counted!', { mode: 'success' });
  voteAlert.render();
  console.log(voteAlert.isVisible());
});
