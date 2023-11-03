// Create a todo array
const CreateToDoArray = () => {
  const list = [];

  return { list }
}

export const toDoList = CreateToDoArray()

// Create a class to create to-dos
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
}

const modal = document.querySelector('.modal')
const addNewToDo = document.querySelector('.add-to-do')

addNewToDo.addEventListener('click', (e) => {
  e.preventDefault()
  modal.classList.remove('hidden')
})

const removeModal = document.querySelector('.cancel')
const form = document.querySelector('.form')

removeModal.addEventListener('click', () => {
  form.reset()
  modal.classList.add('hidden')
})

const submitToDo = document.querySelector('.submit')

submitToDo.addEventListener('click', (e) => {
  e.preventDefault()
  // add to the array
  const task = document.querySelector('#task').value
  const note = document.querySelector('#note').value
  const date = document.querySelector('#date').value
  const project = document.querySelector('#project').value
  const priority = document.querySelector('#priority').value

  const newToDo = new ToDo(task, note, date, project, priority)
  newToDo.addToDo()

  removeDOMTasks()
  renderDOMTasks()
  deleteToDoListener()
  editToDoListener()

  modal.classList.add('hidden')
  form.reset()
})

export function removeDOMTasks() {
  const tasks = document.querySelector('.tasks')
  while (tasks.hasChildNodes()) {
    tasks.removeChild(tasks.firstChild)
  }
}

export function renderDOMTasks() {
  const tasks = document.querySelector('.tasks')

  // loop over array, adding each task to the page
  toDoList.list.forEach(element => {
    const task = document.createElement('div')
    const taskTitle = document.createElement('h3')
    const note = document.createElement('p')
    const date = document.createElement('p')
    const project = document.createElement('p')
    const priority = document.createElement('p')
    const editBtn = document.createElement('button')
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

    priority.textContent = element.priority
    task.append(priority)
    editBtn.textContent = "Edit"
    editBtn.classList.add('edit-to-do')
    task.append(editBtn)
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-to-do')
    task.append(deleteBtn)
  });
}

const editModal = document.querySelector('.edit-modal')

function editToDoListener() {
  const editBtns = document.querySelectorAll('.edit-to-do')
  editBtns.forEach(element => {
    element.addEventListener('click', () => {

      editModal.classList.remove('hidden')
      // popup modal
      const array = Array.from(editBtns)
      const index = array.indexOf(element)
      // target the index where the item in array is at
      console.log(index, ' element clicked');
      console.log(toDoList.list[index]);

      const editTask = document.querySelector('#edit-task')
      const editNote = document.querySelector('#edit-note')
      const editDate = document.querySelector('#edit-date')
      const editProject = document.querySelector('#edit-project')
      const editPriority = document.querySelector('#edit-priority')
      editTask.value = toDoList.list[index].task
      editNote.value = toDoList.list[index].note
      editDate.value = toDoList.list[index].date
      editProject.value = toDoList.list[index].project
      editPriority.value = toDoList.list[index].priority
      // populate the fields with info from the array item index
      editSubmitListener(index, editTask, editNote, editDate, editProject, editPriority)
      // /FUNCTION listen for edit-submit to be pushed
    })
  });
}

function editSubmitListener(index, editTask, editNote, editDate, editProject, editPriority) {
  const editSubmit = document.querySelector('.edit-submit')
  editSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    editToDoList(index, editTask, editNote, editDate, editProject, editPriority)
    removeDOMTasks()
    renderDOMTasks()
    deleteToDoListener()
    editToDoListener()
    // repopulate the dom
    editModal.classList.add('hidden')
    console.log(toDoList.list);
  })
}

function editToDoList(index, editTask, editNote, editDate, editProject, editPriority) {
  // replace the array item with new object
  const task = editTask.value
  const note = editNote.value
  const date = editDate.value
  const project = editProject.value
  const priority = editPriority.value

  const editedToDo = new ToDo(task, note, date, project, priority)
  toDoList.list[index] = editedToDo
  console.log(editedToDo);
  console.log(toDoList.list);
}

const removeEditModal = document.querySelector('.edit-cancel')
const editForm = document.querySelector('.edit-form')

removeEditModal.addEventListener('click', () => {
  editForm.reset()
  editModal.classList.add('hidden')
})




function deleteToDoListener() {
  const deleteBtns = document.querySelectorAll('.delete-to-do')
  deleteBtns.forEach(element => {
    element.addEventListener('click', () => {
      const array = Array.from(deleteBtns)
      const index = array.indexOf(element)
      toDoList.list.splice(index, 1)
      removeDOMTasks()
      renderDOMTasks()
      editToDoListener()
      deleteToDoListener()
      console.log(toDoList.list);
    })
  });
}
