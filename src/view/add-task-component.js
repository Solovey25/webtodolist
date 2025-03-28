import { createElement } from '../framework/render.js';

function createAddTaskComponentTemplate() {
    return `
    <section class="add-task">
        <h1>Новая задача</h1>
        <div class="add-task__form">
            <input type="text" placeholder="Название задачи...">
            <button class="add-task__button">+ Добавить</button>
        </div>
    </section>
  `;
}

export default class AddTaskComponent {
    getTemplate() {
        return createAddTaskComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}
