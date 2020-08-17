import '../css/alert.css';

export default class {
  constructor (message) {
    this.message = message;
  }

  render () {
    this.element = document.createElement('div');
    this.element.classList.add('alert', 'alert-success', 'mt-alert');
    this.element.innerHTML = `<span class="fa fa-lightbulb"></span> ${this.message}`;
    document.body.insertAdjacentElement('afterbegin', this.element);
  }

  /**
   * @returns {boolean}
   */
  isVisible () {
    return Boolean(this.element);
  }
}
