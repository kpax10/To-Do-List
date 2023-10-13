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

  console.log('task: ', task, 'note: ', note, 'date: ', date, 'project: ', project, 'priority: ', priority);

  const newToDo = new ToDo(task, note, date, project, priority)
  newToDo.addToDo()

  console.log(toDoList.list);



  modal.classList.add('hidden')
  form.reset()
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBtYWtlIGEgdG9kbyBhcnJheVxuY29uc3QgQ3JlYXRlVG9Eb0FycmF5ID0gKCkgPT4ge1xuICBjb25zdCBsaXN0ID0gW107XG4gIGNvbnN0IGdldExpc3QgPSAoKSA9PiBsaXN0O1xuXG4gIHJldHVybiB7IGxpc3QsIGdldExpc3QgfVxufVxuXG5jb25zdCB0b0RvTGlzdCA9IENyZWF0ZVRvRG9BcnJheSgpXG5cbi8vIG1ha2UgYSBjbGFzcyB0byBjcmVhdGUgdG8tZG9zXG5jbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGFzaywgbm90ZSwgZGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG4gICAgdGhpcy5ub3RlID0gbm90ZVxuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gIH1cbiAgYWRkVG9EbygpIHtcbiAgICB0b0RvTGlzdC5saXN0LnB1c2godGhpcylcbiAgfVxuICBkZWxldGVUb0RvKHRvRG8pIHtcbiAgICB0b0RvTGlzdC5saXN0LnNwbGljZSh0b0RvTGlzdC5saXN0LmluZGV4T2YodG9EbyksIDEpXG4gIH1cbn1cblxuLy8gYWRkIHRvIGRvIHRvIHByb2plY3Rcbi8vIGNvbnN0IHRvRG8xID0gbmV3IFRvRG8oJ2JsYScsICdibGEnLCAnbm93JywgJ2xvdycpXG4vLyB0b0RvMS5hZGRUb0RvKClcblxuLy8gY29uc3QgdG9EbzIgPSBuZXcgVG9Ebygnd2VlJywgJ3FvbycsICd3b28nLCAnaGlnaCcpXG4vLyB0b0RvMi5hZGRUb0RvKClcblxuLy8gdG9EbzEuZGVsZXRlVG9Ebyh0b0RvMSlcblxuLy8gY29uc3QgdG9EbzMgPSBuZXcgVG9EbygneWEnLCAneWVwJywgJ3dlcncnLCAnc2hocycpXG4vLyB0b0RvMy5hZGRUb0RvKClcblxuLy8gY29uc29sZS5sb2codG9Eb0xpc3QubGlzdCk7XG5cbi8vIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG59KVxuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG5cbmNvbnN0IGFkZE5ld1RvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLWRvJylcbmFkZE5ld1RvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbn0pXG5cbmNvbnN0IHJlbW92ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKVxucmVtb3ZlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBmb3JtLnJlc2V0KClcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn0pXG5cbmNvbnN0IHN1Ym1pdFRvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcbnN1Ym1pdFRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vIGFkZCB0byB0aGUgYXJyYXlcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykudmFsdWVcbiAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlJykudmFsdWVcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWVcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZVxuXG4gIGNvbnNvbGUubG9nKCd0YXNrOiAnLCB0YXNrLCAnbm90ZTogJywgbm90ZSwgJ2RhdGU6ICcsIGRhdGUsICdwcm9qZWN0OiAnLCBwcm9qZWN0LCAncHJpb3JpdHk6ICcsIHByaW9yaXR5KTtcblxuICBjb25zdCBuZXdUb0RvID0gbmV3IFRvRG8odGFzaywgbm90ZSwgZGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpXG4gIG5ld1RvRG8uYWRkVG9EbygpXG5cbiAgY29uc29sZS5sb2codG9Eb0xpc3QubGlzdCk7XG5cblxuXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGZvcm0ucmVzZXQoKVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==