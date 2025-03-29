import { createElement } from '../framework/render.js';

function createTaskBoardTemplate() {
    return `<main class="tasks"></main>`;
}

export default class TaskBoardComponent {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createTaskBoardTemplate();
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