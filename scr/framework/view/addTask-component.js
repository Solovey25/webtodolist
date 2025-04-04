import {createElement} from '../render.js';

function createAddTaskComponentTemplate() {
    return (`
        <div>  <h1>Новая задача</h1>
            <div class="add-task__form">
                <input type="text" placeholder="Название задачи">
                <button class="add-task__button">+ Добавить</button>
                </div>
        </div> `);
}

export default class AddTaskComponent {
    getTemplate() {
        return createAddTaskComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            // Теперь createElement получит строку с одним корневым элементом
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    // Не забудьте добавить метод removeElement, если он используется в вашем фреймворке
    removeElement() {
         this.element = null;
    }
}