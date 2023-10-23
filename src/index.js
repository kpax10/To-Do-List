import { removeTasks, renderTasks } from './tasks.js';

// make a todo array
const CreateToDoArray = () => {
  const list = [];
  const getList = () => list;

  return { list, getList }
}

export const toDoList = CreateToDoArray()

// make a class to create to-dos
class ToDo {
  constructor(task, note, date, project, priority) {
    this.task = task
    this.note = note
    this.date = date
    this.project = project
    this.priority = priority
  }
  addToDo() {
    toDoList.list.push(this)
  }
  deleteToDo(toDo) {
    toDoList.list.splice(toDoList.list.indexOf(toDo), 1)
  }
}

// add to do to project
// const toDo1 = new ToDo('bla', 'bla', 'now', 'low')
// toDo1.addToDo()

// const toDo2 = new ToDo('wee', 'qoo', 'woo', 'high')
// toDo2.addToDo()

// toDo1.deleteToDo(toDo1)

// const toDo3 = new ToDo('ya', 'yep', 'werw', 'shhs')
// toDo3.addToDo()

// console.log(toDoList.list);

// console.log('test');

const button = document.querySelector('.submit')
button.addEventListener('click', (e) => {
  e.preventDefault()
})

const modal = document.querySelector('.modal')

const addNewToDo = document.querySelector('.add-to-do')
addNewToDo.addEventListener('click', (e) => {
  e.preventDefault()
  modal.classList.remove('hidden')
})

const removeModal = document.querySelector('.cancel')
const form = document.querySelector('.form')
removeModal.addEventListener('click', (e) => {
  form.reset()
  modal.classList.add('hidden')
})

const submitToDo = document.querySelector('.submit')
submitToDo.addEventListener('click', () => {
  // add to the array
  const task = document.querySelector('#task').value
  const note = document.querySelector('#note').value
  const date = document.querySelector('#date').value
  const project = document.querySelector('#project').value
  const priority = document.querySelector('#priority').value

  // console.log('task: ', task, 'note: ', note, 'date: ', date, 'project: ', project, 'priority: ', priority);

  const newToDo = new ToDo(task, note, date, project, priority)
  newToDo.addToDo()

  // console.log(toDoList.list);

  removeTasks()
  renderTasks()
  modal.classList.add('hidden')
  form.reset()
})

