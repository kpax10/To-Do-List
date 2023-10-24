/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoList": () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");


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
    this.isComplete = false
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

  const newToDo = new ToDo(task, note, date, project, priority)
  newToDo.addToDo()

  ;(0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.removeDOMTasks)()
  ;(0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.renderDOMTasks)()
  modal.classList.add('hidden')
  form.reset()
})



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeDOMTasks": () => (/* binding */ removeDOMTasks),
/* harmony export */   "renderDOMTasks": () => (/* binding */ renderDOMTasks)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function removeDOMTasks() {
  const tasks = document.querySelector('.tasks')
  while (tasks.hasChildNodes()) {
    tasks.removeChild(tasks.firstChild)
  }
}

function renderDOMTasks() {
  const tasks = document.querySelector('.tasks')

  // loop over array, adding each task to the page
  // console.log('current list: ', toDoList.list);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList.list.forEach(element => {
    const task = document.createElement('div')
    const taskTitle = document.createElement('h3')
    const note = document.createElement('p')
    const date = document.createElement('p')
    const project = document.createElement('p')
    const priority = document.createElement('p')

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
  });
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQUUsMERBQWM7QUFDaEIsRUFBRSwwREFBYztBQUNoQjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZxQzs7QUFFL0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNERBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGdCQUFnQjtBQUMxRDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW1vdmVET01UYXNrcywgcmVuZGVyRE9NVGFza3MgfSBmcm9tICcuL3Rhc2tzLmpzJztcblxuLy8gbWFrZSBhIHRvZG8gYXJyYXlcbmNvbnN0IENyZWF0ZVRvRG9BcnJheSA9ICgpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gbGlzdDtcblxuICByZXR1cm4geyBsaXN0LCBnZXRMaXN0IH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gQ3JlYXRlVG9Eb0FycmF5KClcblxuLy8gbWFrZSBhIGNsYXNzIHRvIGNyZWF0ZSB0by1kb3NcbmNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0YXNrLCBub3RlLCBkYXRlLCBwcm9qZWN0LCBwcmlvcml0eSkge1xuICAgIHRoaXMudGFzayA9IHRhc2tcbiAgICB0aGlzLm5vdGUgPSBub3RlXG4gICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZVxuICB9XG4gIGFkZFRvRG8oKSB7XG4gICAgdG9Eb0xpc3QubGlzdC5wdXNoKHRoaXMpXG4gIH1cbiAgZGVsZXRlVG9Ebyh0b0RvKSB7XG4gICAgdG9Eb0xpc3QubGlzdC5zcGxpY2UodG9Eb0xpc3QubGlzdC5pbmRleE9mKHRvRG8pLCAxKVxuICB9XG59XG5cbi8vIGFkZCB0byBkbyB0byBwcm9qZWN0XG4vLyBjb25zdCB0b0RvMSA9IG5ldyBUb0RvKCdibGEnLCAnYmxhJywgJ25vdycsICdsb3cnKVxuLy8gdG9EbzEuYWRkVG9EbygpXG5cbi8vIGNvbnN0IHRvRG8yID0gbmV3IFRvRG8oJ3dlZScsICdxb28nLCAnd29vJywgJ2hpZ2gnKVxuLy8gdG9EbzIuYWRkVG9EbygpXG5cbi8vIHRvRG8xLmRlbGV0ZVRvRG8odG9EbzEpXG5cbi8vIGNvbnN0IHRvRG8zID0gbmV3IFRvRG8oJ3lhJywgJ3llcCcsICd3ZXJ3JywgJ3NoaHMnKVxuLy8gdG9EbzMuYWRkVG9EbygpXG5cbi8vIGNvbnNvbGUubG9nKHRvRG9MaXN0Lmxpc3QpO1xuXG4vLyBjb25zb2xlLmxvZygndGVzdCcpO1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JylcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxufSlcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuXG5jb25zdCBhZGROZXdUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1kbycpXG5hZGROZXdUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59KVxuXG5jb25zdCByZW1vdmVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJylcbnJlbW92ZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZm9ybS5yZXNldCgpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59KVxuXG5jb25zdCBzdWJtaXRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpXG5zdWJtaXRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyBhZGQgdG8gdGhlIGFycmF5XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLnZhbHVlXG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZScpLnZhbHVlXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWVcblxuICBjb25zdCBuZXdUb0RvID0gbmV3IFRvRG8odGFzaywgbm90ZSwgZGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpXG4gIG5ld1RvRG8uYWRkVG9EbygpXG5cbiAgcmVtb3ZlRE9NVGFza3MoKVxuICByZW5kZXJET01UYXNrcygpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGZvcm0ucmVzZXQoKVxufSlcblxuIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRE9NVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgd2hpbGUgKHRhc2tzLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHRhc2tzLnJlbW92ZUNoaWxkKHRhc2tzLmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRPTVRhc2tzKCkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG5cbiAgLy8gbG9vcCBvdmVyIGFycmF5LCBhZGRpbmcgZWFjaCB0YXNrIHRvIHRoZSBwYWdlXG4gIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50IGxpc3Q6ICcsIHRvRG9MaXN0Lmxpc3QpO1xuICB0b0RvTGlzdC5saXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJylcbiAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrKVxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGFza1xuICAgIHRhc2suYXBwZW5kKHRhc2tUaXRsZSlcbiAgICBub3RlLnRleHRDb250ZW50ID0gZWxlbWVudC5ub3RlXG4gICAgdGFzay5hcHBlbmQobm90ZSlcbiAgICBkYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kYXRlXG4gICAgdGFzay5hcHBlbmQoZGF0ZSlcblxuICAgICFwcm9qZWN0LnRleHRDb250ZW50ID09PSAnJ1xuICAgICAgPyBwcm9qZWN0LnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7ZWxlbWVudC5wcm9qZWN0fWBcbiAgICAgIDogcHJvamVjdC50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJvamVjdFxuICAgIHRhc2suYXBwZW5kKHByb2plY3QpXG4gIH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=