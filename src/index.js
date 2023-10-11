
// make a todo array
const CreateToDoArray = () => {
  const list = [];
  const getList = () => list;

  return { list, getList }
}

const toDoList = CreateToDoArray()

// make a class to create to-dos
class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
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
  console.log('submit');
})

const addNewToDo = document.querySelector('.add-to-do')
const modal = document.querySelector('.modal')
addNewToDo.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('clicked add button');
  modal.classList.remove('hidden')
})


