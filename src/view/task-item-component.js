import { createElement } from '../framework/render.js';

function createTaskItemTemplate(taskText) {
    const escapedText = document.createTextNode(taskText).textContent;
    return `<li class="tasks__item">${escapedText}</li>`; // Добавим класс для стилизации и поиска
}

export default class TaskItemComponent {
    constructor(taskText) {
        this.taskText = taskText;
        this._element = null;
    }

    getTemplate() {
        return createTaskItemTemplate(this.taskText);
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }
        return this._element;
    }

    removeElement() {
        if (this._element) {
            this._element.remove(); // Удаляем элемент из DOM
            this._element = null;
        }
    }
}