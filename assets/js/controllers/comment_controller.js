import { Controller } from 'stimulus';

export default class extends Controller {
  vote (event) {
    console.log('Clicked!');
  }
}
