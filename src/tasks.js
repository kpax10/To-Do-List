import { toDoList } from "./index.js";

export function removeTasks() {
  const tasks = document.querySelector('.tasks')
  while (tasks.hasChildNodes()) {
    tasks.removeChild(tasks.firstChild)
  }
}

export function renderTasks() {
  const tasks = document.querySelector('.tasks')

  // loop over array, adding each task to the page
  console.log('current list: ', toDoList.list);
  toDoList.list.forEach(element => {
    const task = document.createElement('div')
    const taskTitle = document.createElement('h3')
    const note = document.createElement('p')
    const date = document.createElement('p')
    const project = document.createElement('p')
    const priority = document.createElement('p')

    tasks.appendChild(task)
    taskTitle.textContent = element.task
    task.append(taskTitle)

  });
}