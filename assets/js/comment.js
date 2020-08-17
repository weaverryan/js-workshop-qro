import delegate from 'delegate';
import axios from 'axios';
import { alertSuccess, alertError } from './alert';
import { getHappyMessage } from './random-message';

export default class {
  constructor (element) {
    this.element = element;

    delegate(this.element, '.js-comment-vote', 'click', this.handleVoteClick.bind(this));
  }

  async handleVoteClick (event) {
    event.preventDefault();

    const direction = event.delegateTarget.dataset.direction;
    const voteUrl = this.element.dataset.voteUrl;

    let response;
    try {
      response = await axios.post(voteUrl, {
        direction: direction
      })
    } catch (e) {
      alertError('Error voting!');
    }

    this.element.querySelector('.js-vote-total').innerHTML = response.data.votes;
    alertSuccess(`Vote counted! ${getHappyMessage()}`);
  }
}
