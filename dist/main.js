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

console.log('test');

const button = document.querySelector('.submit')
button.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('clicked');
})



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIG1ha2UgYSB0b2RvIGFycmF5XG5jb25zdCBDcmVhdGVUb0RvQXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcbiAgY29uc3QgZ2V0TGlzdCA9ICgpID0+IGxpc3Q7XG5cbiAgcmV0dXJuIHsgbGlzdCwgZ2V0TGlzdCB9XG59XG5cbmNvbnN0IHRvRG9MaXN0ID0gQ3JlYXRlVG9Eb0FycmF5KClcblxuLy8gbWFrZSBhIGNsYXNzIHRvIGNyZWF0ZSB0by1kb3NcbmNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB9XG4gIGFkZFRvRG8oKSB7XG4gICAgdG9Eb0xpc3QubGlzdC5wdXNoKHRoaXMpXG4gIH1cbiAgZGVsZXRlVG9Ebyh0b0RvKSB7XG4gICAgdG9Eb0xpc3QubGlzdC5zcGxpY2UodG9Eb0xpc3QubGlzdC5pbmRleE9mKHRvRG8pLCAxKVxuICB9XG59XG5cbi8vIGFkZCB0byBkbyB0byBwcm9qZWN0XG4vLyBjb25zdCB0b0RvMSA9IG5ldyBUb0RvKCdibGEnLCAnYmxhJywgJ25vdycsICdsb3cnKVxuLy8gdG9EbzEuYWRkVG9EbygpXG5cbi8vIGNvbnN0IHRvRG8yID0gbmV3IFRvRG8oJ3dlZScsICdxb28nLCAnd29vJywgJ2hpZ2gnKVxuLy8gdG9EbzIuYWRkVG9EbygpXG5cbi8vIHRvRG8xLmRlbGV0ZVRvRG8odG9EbzEpXG5cbi8vIGNvbnN0IHRvRG8zID0gbmV3IFRvRG8oJ3lhJywgJ3llcCcsICd3ZXJ3JywgJ3NoaHMnKVxuLy8gdG9EbzMuYWRkVG9EbygpXG5cbi8vIGNvbnNvbGUubG9nKHRvRG9MaXN0Lmxpc3QpO1xuXG5jb25zb2xlLmxvZygndGVzdCcpO1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=