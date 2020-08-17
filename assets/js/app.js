import '../css/app.css';

// future custom JS

const comments = document.querySelectorAll('.js-comment-container');
if (comments.length > 0) {
  import('./components/comment').then(Comment => {
    console.log(Comment);
  });
}
