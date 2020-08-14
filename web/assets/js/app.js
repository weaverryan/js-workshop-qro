import notify from './notify';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
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
    data: {
      direction: $button.data('direction')
    },
    method: 'POST'
  });

  $container.find('.js-vote-total').text(data.votes);
  notify('Vote counted!');
});
