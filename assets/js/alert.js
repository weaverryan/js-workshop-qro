import '../css/alert.css';

export default class {
  constructor (message, options) {
    this.message = message;

    const defaultOptions = {
      mode: 'success'
    };
    this.options = { ...defaultOptions, ...options };
  }

  render () {
    this.element = document.createElement('div');
    this.element.classList.add(
      'alert',
      `alert-${this.options.mode === 'success' ? 'success' : 'danger'}`,
      'mt-alert'
    );
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
