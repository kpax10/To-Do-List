import { indexOf } from "lodash";
import newToDo, { toDoList } from "./index.js";

export function removeDOMTasks() {
  const tasks = document.querySelector('.tasks')
  while (tasks.hasChildNodes()) {
    tasks.removeChild(tasks.firstChild)
  }
}

export function renderDOMTasks() {
  const tasks = document.querySelector('.tasks')

  // loop over array, adding each task to the page
  // console.log('current list: ', toDoList.list);
  toDoList.list.forEach(element => {
    const task = document.createElement('div')
    const taskTitle = document.createElement('h3')
    const note = document.createElement('p')
    const date = document.createElement('p')
    const project = document.createElement('p')
    const priority = document.createElement('p')
    const deleteBtn = document.createElement('button')

    task.classList.add('to-do')
    tasks.appendChild(task)
    taskTitle.textContent = element.task
    task.append(taskTitle)
    note.textContent = element.note
    task.append(note)
    date.textContent = element.date
    task.append(date)

    !project.textContent === ''
      ? project.textContent = `Project: ${element.project}`
      : project.textContent = element.project
    task.append(project)

    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-to-do')
    task.append(deleteBtn)

    // // create event listener for delete button
    // deleteBtn.addEventListener('click', () => {
    //   // const index = Array.from()
    //   // console.log(deleteBtn);
    //   // console.log(indexOf(deleteBtn));
    //   console.log('clicked', deleteBtn.);
    // })

  });
}