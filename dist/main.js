/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

// make a todo array
const CreateToDoArray = () => {
  const list = [];
  const getList = () => list;

  return { list, getList }
}

const toDoList = CreateToDoArray()

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
  console.log('submit');
})

const addNewToDo = document.querySelector('.add-to-do')
const modal = document.querySelector('.modal')
addNewToDo.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('clicked add button');
  modal.classList.remove('hidden')
})

const removeModal = document.querySelector('.cancel')
const form = document.querySelector('.form')
removeModal.addEventListener('click', (e) => {
  e.preventDefault()
  form.reset()
  modal.classList.add('hidden')
})



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIG1ha2UgYSB0b2RvIGFycmF5XG5jb25zdCBDcmVhdGVUb0RvQXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IGxpc3Q7XG5cbiAgcmV0dXJuIHsgbGlzdCwgZ2V0TGlzdCB9XG59XG5cbmNvbnN0IHRvRG9MaXN0ID0gQ3JlYXRlVG9Eb0FycmF5KClcblxuLy8gbWFrZSBhIGNsYXNzIHRvIGNyZWF0ZSB0by1kb3NcbmNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0YXNrLCBub3RlLCBkYXRlLCBwcm9qZWN0LCBwcmlvcml0eSkge1xuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgICB0aGlzLm5vdGUgPSBub3RlXG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgfVxuICBhZGRUb0RvKCkge1xuICAgIHRvRG9MaXN0Lmxpc3QucHVzaCh0aGlzKVxuICB9XG4gIGRlbGV0ZVRvRG8odG9Ebykge1xuICAgIHRvRG9MaXN0Lmxpc3Quc3BsaWNlKHRvRG9MaXN0Lmxpc3QuaW5kZXhPZih0b0RvKSwgMSlcbiAgfVxufVxuXG4vLyBhZGQgdG8gZG8gdG8gcHJvamVjdFxuLy8gY29uc3QgdG9EbzEgPSBuZXcgVG9EbygnYmxhJywgJ2JsYScsICdub3cnLCAnbG93Jylcbi8vIHRvRG8xLmFkZFRvRG8oKVxuXG4vLyBjb25zdCB0b0RvMiA9IG5ldyBUb0RvKCd3ZWUnLCAncW9vJywgJ3dvbycsICdoaWdoJylcbi8vIHRvRG8yLmFkZFRvRG8oKVxuXG4vLyB0b0RvMS5kZWxldGVUb0RvKHRvRG8xKVxuXG4vLyBjb25zdCB0b0RvMyA9IG5ldyBUb0RvKCd5YScsICd5ZXAnLCAnd2VydycsICdzaGhzJylcbi8vIHRvRG8zLmFkZFRvRG8oKVxuXG4vLyBjb25zb2xlLmxvZyh0b0RvTGlzdC5saXN0KTtcblxuLy8gY29uc29sZS5sb2coJ3Rlc3QnKTtcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc29sZS5sb2coJ3N1Ym1pdCcpO1xufSlcblxuY29uc3QgYWRkTmV3VG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tZG8nKVxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuYWRkTmV3VG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zb2xlLmxvZygnY2xpY2tlZCBhZGQgYnV0dG9uJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59KVxuXG5jb25zdCByZW1vdmVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJylcbnJlbW92ZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGZvcm0ucmVzZXQoKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=