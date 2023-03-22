/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// make a master project array
const CreateProjectsList = () => {
  const list = [];
  const getList = () => list;

  return { list, getList }
}

// make a class to create projects
class Project {
  constructor(name) {
    this.name = name
    this.list = []
  }
  addProjectToList() {
    projectList.getList().push(this)
  }
}

// make a class to create to-dos
class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }

  addToDoToProject(project) {
    project.list.push(this)
  }
}

// create master project array
const projectList = CreateProjectsList();

// create new project
const proj1 = new Project('proj1');

// add project to master array
proj1.addProjectToList()

// add to do to project
const todo1 = new ToDo('bla', 'bla', 'now', 'low')
todo1.addToDoToProject(proj1)

// console.log(projectList.getList());

console.log(projectList.list[0].list[0].title)
console.dir(projectList.list[0].list[0])
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYWtlIGEgbWFzdGVyIHByb2plY3QgYXJyYXlcbmNvbnN0IENyZWF0ZVByb2plY3RzTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gbGlzdDtcblxuICByZXR1cm4geyBsaXN0LCBnZXRMaXN0IH1cbn1cblxuLy8gbWFrZSBhIGNsYXNzIHRvIGNyZWF0ZSBwcm9qZWN0c1xuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5saXN0ID0gW11cbiAgfVxuICBhZGRQcm9qZWN0VG9MaXN0KCkge1xuICAgIHByb2plY3RMaXN0LmdldExpc3QoKS5wdXNoKHRoaXMpXG4gIH1cbn1cblxuLy8gbWFrZSBhIGNsYXNzIHRvIGNyZWF0ZSB0by1kb3NcbmNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB9XG5cbiAgYWRkVG9Eb1RvUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdC5saXN0LnB1c2godGhpcylcbiAgfVxufVxuXG4vLyBjcmVhdGUgbWFzdGVyIHByb2plY3QgYXJyYXlcbmNvbnN0IHByb2plY3RMaXN0ID0gQ3JlYXRlUHJvamVjdHNMaXN0KCk7XG5cbi8vIGNyZWF0ZSBuZXcgcHJvamVjdFxuY29uc3QgcHJvajEgPSBuZXcgUHJvamVjdCgncHJvajEnKTtcblxuLy8gYWRkIHByb2plY3QgdG8gbWFzdGVyIGFycmF5XG5wcm9qMS5hZGRQcm9qZWN0VG9MaXN0KClcblxuLy8gYWRkIHRvIGRvIHRvIHByb2plY3RcbmNvbnN0IHRvZG8xID0gbmV3IFRvRG8oJ2JsYScsICdibGEnLCAnbm93JywgJ2xvdycpXG50b2RvMS5hZGRUb0RvVG9Qcm9qZWN0KHByb2oxKVxuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5nZXRMaXN0KCkpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5saXN0WzBdLmxpc3RbMF0udGl0bGUpXG5jb25zb2xlLmRpcihwcm9qZWN0TGlzdC5saXN0WzBdLmxpc3RbMF0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9