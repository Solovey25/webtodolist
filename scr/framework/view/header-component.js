import {createElement} from '../render.js'; 


function createHeaderComponentTemplate() {
    return (
        `<h1 class="list">Список задач</h1>`
      );
}


export default class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
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
