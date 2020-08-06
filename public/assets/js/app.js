/**
 * Simple (ugly) code to handle the comment vote up/down
 */
var $container = $('.js-vote-arrows');
$container.find('button').on('click', function(e) {
    e.preventDefault();
    var $button = $(e.currentTarget);

    $.ajax({
        url: '/comments/10/vote/'+$button.val(),
        method: 'POST'
    }).then(function(data) {
        $container.find('.js-vote-total').text(data.votes);
    });
});
