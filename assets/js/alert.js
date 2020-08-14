import '../css/alert.css';

export default class {
  constructor (message) {
    this.message = message;
  }

  render () {
    const element = document.createElement('div');
    element.classList.add('alert', 'alert-success', 'mt-alert');
    element.innerHTML = `<span class="fa fa-lightbulb"></span> ${this.message}`;
    document.body.insertAdjacentElement('afterbegin', element);
  }
}
