import delegate from 'delegate';
import axios from 'axios';

export default class {
  constructor (element) {
    this.element = element;

    delegate(this.element, '.js-comment-vote', 'click', this.handleVoteClick.bind(this));
  }

  async handleVoteClick (event) {
    event.preventDefault();

    const direction = event.delegateTarget.dataset.direction;
    const voteUrl = this.element.dataset.voteUrl;

    const response = await axios.post(voteUrl, {
      direction: direction
    })

    this.element.querySelector('.js-vote-total').innerHTML = response.data.votes;
  }
}
