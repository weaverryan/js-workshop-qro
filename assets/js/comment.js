import delegate from 'delegate';

export default class {
  constructor (element) {
    this.element = element;

    delegate(this.element, '.js-comment-vote', 'click', this.handleVoteClick.bind(this));
  }

  handleVoteClick (event) {
    event.preventDefault();

    const direction = event.delegateTarget.dataset.direction;
    const voteUrl = this.element.dataset.voteUrl;
    console.log(direction, voteUrl);
  }
}
