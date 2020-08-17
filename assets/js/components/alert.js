import '../../css/alert.css';
import delegate from 'delegate';

export default class Alert {
  /**
   * @param {string} message
   * @param {object} options
   * @param {string} options.mode One of "success" or "error"
   */
  constructor (message, options = {}) {
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
      'alert-dismissible',
      'mt-alert'
    );
    this.element.innerHTML = `
      <span class="fa fa-lightbulb"></span> ${this.message}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    `;
    document.body.insertAdjacentElement('afterbegin', this.element);

    delegate(this.element, '[data-dismiss]', 'click', this.handleClickClose.bind(this));

    // faking AJAX call that updates the HTML
    setTimeout(() => {
      // <a href="#" class="btn" data-dismiss="alert">close</a>
      const closeTextElement = document.createElement('a');
      closeTextElement.classList.add('btn');
      closeTextElement.setAttribute('data-dismiss', 'alert');
      closeTextElement.setAttribute('href', '#');
      closeTextElement.innerHTML = 'close';
      this.element.insertAdjacentElement('afterbegin', closeTextElement);
    }, 1500);
  }

  handleClickClose (event) {
    event.preventDefault();

    this.element.remove();
  }

  /**
   * @returns {boolean}
   */
  isVisible () {
    return Boolean(this.element);
  }
}

export function alertSuccess (message, options = {}) {
  options.mode = 'success';
  const successAlert = new Alert(message, options);
  successAlert.render();

  return successAlert;
}

export function alertError (message, options = {}) {
  options.mode = 'error';
  const errorAlert = new Alert(message, options);
  errorAlert.render();

  return errorAlert;
}
