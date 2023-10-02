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

// create todo array
// const todoList = CreateToDoArray();

// add to do to project
const toDo1 = new ToDo('bla', 'bla', 'now', 'low')
toDo1.addToDo()

const toDo2 = new ToDo('wee', 'qoo', 'woo', 'high')
toDo2.addToDo()

toDo1.deleteToDo(toDo1)

const toDo3 = new ToDo('ya', 'yep', 'werw', 'shhs')
toDo3.addToDo()

console.log(toDoList.list);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBtYWtlIGEgdG9kbyBhcnJheVxuY29uc3QgQ3JlYXRlVG9Eb0FycmF5ID0gKCkgPT4ge1xuICBjb25zdCBsaXN0ID0gW107XG4gIGNvbnN0IGdldExpc3QgPSAoKSA9PiBsaXN0O1xuXG4gIHJldHVybiB7IGxpc3QsIGdldExpc3QgfVxufVxuXG5jb25zdCB0b0RvTGlzdCA9IENyZWF0ZVRvRG9BcnJheSgpXG5cbi8vIG1ha2UgYSBjbGFzcyB0byBjcmVhdGUgdG8tZG9zXG5jbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgfVxuICBhZGRUb0RvKCkge1xuICAgIHRvRG9MaXN0Lmxpc3QucHVzaCh0aGlzKVxuICB9XG4gIGRlbGV0ZVRvRG8odG9Ebykge1xuICAgIHRvRG9MaXN0Lmxpc3Quc3BsaWNlKHRvRG9MaXN0Lmxpc3QuaW5kZXhPZih0b0RvKSwgMSlcbiAgfVxufVxuXG4vLyBjcmVhdGUgdG9kbyBhcnJheVxuLy8gY29uc3QgdG9kb0xpc3QgPSBDcmVhdGVUb0RvQXJyYXkoKTtcblxuLy8gYWRkIHRvIGRvIHRvIHByb2plY3RcbmNvbnN0IHRvRG8xID0gbmV3IFRvRG8oJ2JsYScsICdibGEnLCAnbm93JywgJ2xvdycpXG50b0RvMS5hZGRUb0RvKClcblxuY29uc3QgdG9EbzIgPSBuZXcgVG9Ebygnd2VlJywgJ3FvbycsICd3b28nLCAnaGlnaCcpXG50b0RvMi5hZGRUb0RvKClcblxudG9EbzEuZGVsZXRlVG9Ebyh0b0RvMSlcblxuY29uc3QgdG9EbzMgPSBuZXcgVG9EbygneWEnLCAneWVwJywgJ3dlcncnLCAnc2hocycpXG50b0RvMy5hZGRUb0RvKClcblxuY29uc29sZS5sb2codG9Eb0xpc3QubGlzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=