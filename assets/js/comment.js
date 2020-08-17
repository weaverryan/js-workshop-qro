import delegate from 'delegate';

export default class {
  constructor (element) {
    this.element = element;

    delegate(this.element, '.js-comment-vote', 'click', this.handleVoteClick.bind(this));
  }

  handleVoteClick (event) {
    event.preventDefault();
  }
}
