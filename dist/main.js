/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name
    this.toDos = []
  }
}

class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }
  addToDoToProject(project) {
    project.toDos.push(this)
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");


// create new project
const proj1 = new _classes__WEBPACK_IMPORTED_MODULE_0__.Project('Project 1')

// create a todo
const toDo1 = new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo('Milk', 'Need milk for this week', '', 1)

// add the todo to the project
toDo1.addToDoToProject(proj1)

console.log(proj1);



// // make a master project array
// const CreateProjectsList = () => {
//   const list = [];
//   const getList = () => list;

//   return { list, getList }
// }

// // make a class to create projects
// class Project {
//   constructor(name) {
//     this.name = name
//     this.list = []
//   }
//   addProjectToList() {
//     projectList.getList().push(this)
//   }
// }

// // make a class to create to-dos
// class ToDo {
//   constructor(title, description, dueDate, priority) {
//     this.title = title
//     this.description = description
//     this.dueDate = dueDate
//     this.priority = priority
//   }

//   addToDoToProject(project) {
//     project.list.push(this)
//   }
// }

// // create master project array
// const projectList = CreateProjectsList();

// // create new project
// const proj1 = new Project('proj1');

// // add project to master array
// proj1.addProjectToList()

// // add to do to project
// const todo1 = new ToDo('bla', 'bla', 'now', 'low')
// todo1.addToDoToProject(proj1)

// // console.log(projectList.getList());

// console.log(projectList.list[0].list[0].title)
// console.dir(projectList.list[0].list[0])
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDOztBQUUxQztBQUNBLGtCQUFrQiw2Q0FBTzs7QUFFekI7QUFDQSxrQkFBa0IsMENBQUk7O0FBRXRCO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy50b0RvcyA9IFtdXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB9XG4gIGFkZFRvRG9Ub1Byb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3QudG9Eb3MucHVzaCh0aGlzKVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRvRG8sIFByb2plY3QgfSBmcm9tICcuL2NsYXNzZXMnO1xuXG4vLyBjcmVhdGUgbmV3IHByb2plY3RcbmNvbnN0IHByb2oxID0gbmV3IFByb2plY3QoJ1Byb2plY3QgMScpXG5cbi8vIGNyZWF0ZSBhIHRvZG9cbmNvbnN0IHRvRG8xID0gbmV3IFRvRG8oJ01pbGsnLCAnTmVlZCBtaWxrIGZvciB0aGlzIHdlZWsnLCAnJywgMSlcblxuLy8gYWRkIHRoZSB0b2RvIHRvIHRoZSBwcm9qZWN0XG50b0RvMS5hZGRUb0RvVG9Qcm9qZWN0KHByb2oxKVxuXG5jb25zb2xlLmxvZyhwcm9qMSk7XG5cblxuXG4vLyAvLyBtYWtlIGEgbWFzdGVyIHByb2plY3QgYXJyYXlcbi8vIGNvbnN0IENyZWF0ZVByb2plY3RzTGlzdCA9ICgpID0+IHtcbi8vICAgY29uc3QgbGlzdCA9IFtdO1xuLy8gICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gbGlzdDtcblxuLy8gICByZXR1cm4geyBsaXN0LCBnZXRMaXN0IH1cbi8vIH1cblxuLy8gLy8gbWFrZSBhIGNsYXNzIHRvIGNyZWF0ZSBwcm9qZWN0c1xuLy8gY2xhc3MgUHJvamVjdCB7XG4vLyAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbi8vICAgICB0aGlzLm5hbWUgPSBuYW1lXG4vLyAgICAgdGhpcy5saXN0ID0gW11cbi8vICAgfVxuLy8gICBhZGRQcm9qZWN0VG9MaXN0KCkge1xuLy8gICAgIHByb2plY3RMaXN0LmdldExpc3QoKS5wdXNoKHRoaXMpXG4vLyAgIH1cbi8vIH1cblxuLy8gLy8gbWFrZSBhIGNsYXNzIHRvIGNyZWF0ZSB0by1kb3Ncbi8vIGNsYXNzIFRvRG8ge1xuLy8gICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4vLyAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4vLyAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4vLyAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuLy8gICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuLy8gICB9XG5cbi8vICAgYWRkVG9Eb1RvUHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgcHJvamVjdC5saXN0LnB1c2godGhpcylcbi8vICAgfVxuLy8gfVxuXG4vLyAvLyBjcmVhdGUgbWFzdGVyIHByb2plY3QgYXJyYXlcbi8vIGNvbnN0IHByb2plY3RMaXN0ID0gQ3JlYXRlUHJvamVjdHNMaXN0KCk7XG5cbi8vIC8vIGNyZWF0ZSBuZXcgcHJvamVjdFxuLy8gY29uc3QgcHJvajEgPSBuZXcgUHJvamVjdCgncHJvajEnKTtcblxuLy8gLy8gYWRkIHByb2plY3QgdG8gbWFzdGVyIGFycmF5XG4vLyBwcm9qMS5hZGRQcm9qZWN0VG9MaXN0KClcblxuLy8gLy8gYWRkIHRvIGRvIHRvIHByb2plY3Rcbi8vIGNvbnN0IHRvZG8xID0gbmV3IFRvRG8oJ2JsYScsICdibGEnLCAnbm93JywgJ2xvdycpXG4vLyB0b2RvMS5hZGRUb0RvVG9Qcm9qZWN0KHByb2oxKVxuXG4vLyAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5nZXRMaXN0KCkpO1xuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5saXN0WzBdLmxpc3RbMF0udGl0bGUpXG4vLyBjb25zb2xlLmRpcihwcm9qZWN0TGlzdC5saXN0WzBdLmxpc3RbMF0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9