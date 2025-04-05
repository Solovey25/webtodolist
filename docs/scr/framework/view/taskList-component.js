import {createElement} from '../render.js';

function createTaskListComponentTemplate() {
  return (
    `<section class="tasks__column">
       <p class="p1">Test Task List</p>
       <ul class="tasks__list"></ul>
     </section>`
  );
}

export default class TaskListComponent {
  getTemplate() {
    return createTaskListComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}