import HeaderComponent from './framework/view/header-component.js';
import {render} from './framework/render.js';
import AddTaskComponent from './framework/view/addTask-component.js';
import TaskListComponent from './framework/view/taskList-component.js';
import TaskComponent from './framework/view/task-component.js';

const headerContainer = document.querySelector('.header');
const addTaskContainer = document.querySelector('.add-task');
const tasksContainer = document.querySelector('.tasks');

render(new HeaderComponent(), headerContainer);
render(new AddTaskComponent(), addTaskContainer);

const taskListComponents = [];
for (let i = 0; i < 4; i++) {
  const taskListComponent = new TaskListComponent();
  render(taskListComponent, tasksContainer);
  taskListComponents.push(taskListComponent);
}

taskListComponents.forEach((listComponent) => {
  const tasksListContainer = listComponent.getElement().querySelector('.tasks__list');
  for (let i = 0; i < 4; i++) {
    render(new TaskComponent(), tasksListContainer);
  }
});