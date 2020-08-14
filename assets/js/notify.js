import '../css/notify.css';

export default class {
  constructor(message) {
    this.message = message;
  }

  render() {
    const element = document.createElement('div');
    element.classList.add('alert', 'alert-success', 'notification');
    element.innerHTML = `<span class="fa fa-lightbulb"></span> ${message}`;
    document.body.insertAdjacentElement('afterbegin', element);
  }
}
