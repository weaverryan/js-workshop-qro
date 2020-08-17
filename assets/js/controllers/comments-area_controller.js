import { Controller } from 'stimulus';

export default class extends Controller {
  static get targets () {
    return ['comment', 'commentList'];
  }

  submitAnswer () {
    this.commentListTarget.prepend(this.commentTargets[0].cloneNode(true))
  }
}
