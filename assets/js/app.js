import Comment from './components/comment';
import '../css/app.css';

document.querySelectorAll('.js-comment-container').forEach(element => {
  new Comment(element);
});
