export default class {
  constructor (message) {
    this.message = message;
  }

  render () {
    this.element = document.createElement('div');
    this.element.classList.add('alert', 'alert-success', 'notification');
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
