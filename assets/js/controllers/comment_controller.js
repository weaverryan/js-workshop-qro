import { Controller } from 'stimulus';
import axios from 'axios';
import { alertError, alertSuccess } from '../components/alert';
import { getHappyMessage } from '../utilities/random-message';

export default class extends Controller {
  static get targets () {
    return ['voteCount'];
  }

  async vote (event) {
    event.preventDefault();

    const direction = event.currentTarget.dataset.direction;
    const voteUrl = this.element.dataset.voteUrl;

    let response;
    try {
      response = await axios.post(voteUrl, {
        direction: direction
      })
    } catch (e) {
      alertError('Error voting!');
    }

    this.voteCountTarget.innerHTML = response.data.votes;
    alertSuccess(`Vote counted! ${getHappyMessage()}`);
  }
}
