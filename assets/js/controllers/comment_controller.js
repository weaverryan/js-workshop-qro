import { Controller } from 'stimulus';
import Comment from '../components/comment';

export default class extends Controller {
  initialize () {
    new Comment(this.element);
  }
}
