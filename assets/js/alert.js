import '../css/alert.css';

export default function (message) {
  const element = document.createElement('div');
  element.classList.add('alert', 'alert-success', 'mt-alert');
  element.innerHTML = `<span class="fa fa-lightbulb"></span> ${message}`;
  document.body.insertAdjacentElement('afterbegin', element);
}
