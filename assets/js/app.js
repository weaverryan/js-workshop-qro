import '../css/app.css';

// Initialize Stimulus & the controllers/ directory
import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';

const application = Application.start();
const context = require.context('./controllers', true, /\.js$/);
application.load(definitionsFromContext(context));

const comments = document.querySelectorAll('.js-comment-container');
if (comments.length > 0) {
  /*
  import('./components/comment').then(Comment => {
    comments.forEach(element => {
      new Comment.default(element);
    });
  });
  */

  /*
  const submitAnswerButton = document.querySelector('.js-submit-answer');
  submitAnswerButton.addEventListener('click', () => {
    comments[0].parentElement.prepend(comments[0].cloneNode(true))
  });
   */
}
