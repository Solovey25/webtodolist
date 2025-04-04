import {createElement} from '../render.js';

function createTaskComponentTemplate() {
  return `<li>Test Task</li>`;
}

export default class TaskComponent {
  getTemplate() {
    return createTaskComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}