import { createElement } from '../framework/render.js';

function createTaskColumnTemplate(title, tasks, className) {
    const tasksHtml = tasks.map(task => `<li>${task}</li>`).join('');

    const clearButtonHtml = className === 'trash'
        ? '<button class="clear-button">X Очистить</button>'
        : '';

    return `
    <section class="tasks__column ${className}">
      <p>${title}</p>
      <ul class="tasks__list">
        ${tasksHtml}
      </ul>
      ${clearButtonHtml}
    </section>
  `;
}

export default class TaskColumnComponent {
    constructor(title, tasks, className) {
        this.title = title;
        this.tasks = tasks;
        this.className = className;
        this._element = null;
    }

    getTemplate() {
        return createTaskColumnTemplate(this.title, this.tasks, this.className);
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }
        return this._element;
    }

    removeElement() {
        this._element = null;
    }
}