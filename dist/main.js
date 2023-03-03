/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function ProjectsArray() {
  const _projects = [
    {
      projectName: 'Project 1'
    }
  ]
  const getProjects = () => _projects

  return { getProjects }
}

const projects = ProjectsArray()


class Project {

  constructor(name) {
    this.projectName = name;
  }

  addProjectToArray() {
    projects.getProjects().push(this)
  }
}

class ToDo {
  constructor(title, description, dueDate, priority, isCompleted) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.isCompleted = isCompleted
  }

  addToDoToProject(project) {
    projects.getProjects()
  }
}



const project2 = new Project('Project 2')
project2.addProjectToArray()
console.log(projects.getProjects());

const project3 = new Project('Project3')
project2.addProjectToArray();
console.log(projects.getProjects());

const toDo1 = new ToDo('new title', 'blah blah', '03/01/2023', 'low', true)
console.log(toDo1);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFByb2plY3RzQXJyYXkoKSB7XG4gIGNvbnN0IF9wcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICBwcm9qZWN0TmFtZTogJ1Byb2plY3QgMSdcbiAgICB9XG4gIF1cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBfcHJvamVjdHNcblxuICByZXR1cm4geyBnZXRQcm9qZWN0cyB9XG59XG5cbmNvbnN0IHByb2plY3RzID0gUHJvamVjdHNBcnJheSgpXG5cblxuY2xhc3MgUHJvamVjdCB7XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMucHJvamVjdE5hbWUgPSBuYW1lO1xuICB9XG5cbiAgYWRkUHJvamVjdFRvQXJyYXkoKSB7XG4gICAgcHJvamVjdHMuZ2V0UHJvamVjdHMoKS5wdXNoKHRoaXMpXG4gIH1cbn1cblxuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZFxuICB9XG5cbiAgYWRkVG9Eb1RvUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMuZ2V0UHJvamVjdHMoKVxuICB9XG59XG5cblxuXG5jb25zdCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCdQcm9qZWN0IDInKVxucHJvamVjdDIuYWRkUHJvamVjdFRvQXJyYXkoKVxuY29uc29sZS5sb2cocHJvamVjdHMuZ2V0UHJvamVjdHMoKSk7XG5cbmNvbnN0IHByb2plY3QzID0gbmV3IFByb2plY3QoJ1Byb2plY3QzJylcbnByb2plY3QyLmFkZFByb2plY3RUb0FycmF5KCk7XG5jb25zb2xlLmxvZyhwcm9qZWN0cy5nZXRQcm9qZWN0cygpKTtcblxuY29uc3QgdG9EbzEgPSBuZXcgVG9EbygnbmV3IHRpdGxlJywgJ2JsYWggYmxhaCcsICcwMy8wMS8yMDIzJywgJ2xvdycsIHRydWUpXG5jb25zb2xlLmxvZyh0b0RvMSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=