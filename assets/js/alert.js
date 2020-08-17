import '../css/alert.css';

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

    this.element.querySelectorAll('[data-dismiss]').forEach((el) => {
      el.addEventListener('click', (event) => {
        this.handleClickClose(event);
      });
    });
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
