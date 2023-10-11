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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gbWFrZSBhIHRvZG8gYXJyYXlcbmNvbnN0IENyZWF0ZVRvRG9BcnJheSA9ICgpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gbGlzdDtcblxuICByZXR1cm4geyBsaXN0LCBnZXRMaXN0IH1cbn1cblxuY29uc3QgdG9Eb0xpc3QgPSBDcmVhdGVUb0RvQXJyYXkoKVxuXG4vLyBtYWtlIGEgY2xhc3MgdG8gY3JlYXRlIHRvLWRvc1xuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gIH1cbiAgYWRkVG9EbygpIHtcbiAgICB0b0RvTGlzdC5saXN0LnB1c2godGhpcylcbiAgfVxuICBkZWxldGVUb0RvKHRvRG8pIHtcbiAgICB0b0RvTGlzdC5saXN0LnNwbGljZSh0b0RvTGlzdC5saXN0LmluZGV4T2YodG9EbyksIDEpXG4gIH1cbn1cblxuLy8gYWRkIHRvIGRvIHRvIHByb2plY3Rcbi8vIGNvbnN0IHRvRG8xID0gbmV3IFRvRG8oJ2JsYScsICdibGEnLCAnbm93JywgJ2xvdycpXG4vLyB0b0RvMS5hZGRUb0RvKClcblxuLy8gY29uc3QgdG9EbzIgPSBuZXcgVG9Ebygnd2VlJywgJ3FvbycsICd3b28nLCAnaGlnaCcpXG4vLyB0b0RvMi5hZGRUb0RvKClcblxuLy8gdG9EbzEuZGVsZXRlVG9Ebyh0b0RvMSlcblxuLy8gY29uc3QgdG9EbzMgPSBuZXcgVG9EbygneWEnLCAneWVwJywgJ3dlcncnLCAnc2hocycpXG4vLyB0b0RvMy5hZGRUb0RvKClcblxuLy8gY29uc29sZS5sb2codG9Eb0xpc3QubGlzdCk7XG5cbi8vIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnNvbGUubG9nKCdzdWJtaXQnKTtcbn0pXG5cbmNvbnN0IGFkZE5ld1RvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvLWRvJylcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcbmFkZE5ld1RvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc29sZS5sb2coJ2NsaWNrZWQgYWRkIGJ1dHRvbicpO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=