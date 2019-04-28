/**
 * Creates an HTMLElement
 * Takes an option object where you can specify
 * optional parameters
 * @param {Object} options
 * @returns HTMLElement
 */

export function createEl({
  className = '',
  type = 'div',
  target = document.body,
  position = 'beforeend',
  innerHTML = '',
  onClick
}) {
  const el = document.createElement(type);
  el.className = className;
  el.innerHTML = innerHTML;
  target.insertAdjacentElement(position, el);
  el.addEventListener('click', onClick);
  return el;
}
