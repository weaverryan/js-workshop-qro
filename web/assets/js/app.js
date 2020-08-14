/**
 * Simple (ugly) code to handle the comment vote up/down
 */
$('.js-comment-vote').on('click', function(e) {
    e.preventDefault();
    var $button = $(e.currentTarget);
    var $container = $button.closest('.js-vote-arrows');

    $.ajax({
        url: $container.data('url'),
        data: {
            direction: $button.data('direction')
        },
        method: 'POST'
    }).then(function(data) {
        $container.find('.js-vote-total').text(data.votes);

        alert('Vote counted!');
    });
});
