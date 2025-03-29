import { createElement } from '../framework/render.js';

function createTaskColumnTemplate(title, className) {
    const clearButtonHtml = className === 'trash'
        ? '<button class="clear-button">X Очистить</button>'
        : '';

    return `
    <section class="tasks__column ${className}">
      <p>${title}</p>
      <ul class="tasks__list">
      </ul>
      ${clearButtonHtml}
    </section>
  `;
}

export default class TaskColumnComponent {
    constructor(title, className) {
        this.title = title;
        this.className = className;
        this._element = null;
    }

    getTemplate() {
        return createTaskColumnTemplate(this.title, this.className);
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }
        return this._element;
    }

    getTaskListContainerElement() {
        return this.getElement().querySelector('.tasks__list');
    }


    removeElement() {
        if (this._element) {
            this._element.remove();
            this._element = null;
        }
    }
}