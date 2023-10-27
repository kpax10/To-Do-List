/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/to-dos.js":
/*!***********************!*\
  !*** ./src/to-dos.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeDOMTasks": () => (/* binding */ removeDOMTasks),
/* harmony export */   "renderDOMTasks": () => (/* binding */ renderDOMTasks),
/* harmony export */   "toDoList": () => (/* binding */ toDoList)
/* harmony export */ });
// Create a todo array
const CreateToDoArray = () => {
  const list = [];

  return { list }
}

const toDoList = CreateToDoArray()

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

function removeDOMTasks() {
  const tasks = document.querySelector('.tasks')
  while (tasks.hasChildNodes()) {
    tasks.removeChild(tasks.firstChild)
  }
}

function renderDOMTasks() {
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

      // 
    })
  });
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
    })
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to_dos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-dos.js */ "./src/to-dos.js");

// Check local storage

// Render Side Bar

// Render main to-do's section



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGdCQUFnQjtBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7OztBQUtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7O1VDdktBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOaUY7QUFDakY7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvLWRvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGUgYSB0b2RvIGFycmF5XG5jb25zdCBDcmVhdGVUb0RvQXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcblxuICByZXR1cm4geyBsaXN0IH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gQ3JlYXRlVG9Eb0FycmF5KClcblxuLy8gQ3JlYXRlIGEgY2xhc3MgdG8gY3JlYXRlIHRvLWRvc1xuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRhc2ssIG5vdGUsIGRhdGUsIHByb2plY3QsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50YXNrID0gdGFza1xuICAgIHRoaXMubm90ZSA9IG5vdGVcbiAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB9XG4gIGFkZFRvRG8oKSB7XG4gICAgdG9Eb0xpc3QubGlzdC5wdXNoKHRoaXMpXG4gIH1cbn1cblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuY29uc3QgYWRkTmV3VG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tZG8nKVxuXG5hZGROZXdUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59KVxuXG5jb25zdCByZW1vdmVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJylcblxucmVtb3ZlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGZvcm0ucmVzZXQoKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufSlcblxuY29uc3Qgc3VibWl0VG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuXG5zdWJtaXRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIGFkZCB0byB0aGUgYXJyYXlcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykudmFsdWVcbiAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlJykudmFsdWVcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWVcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZVxuXG4gIGNvbnN0IG5ld1RvRG8gPSBuZXcgVG9Ebyh0YXNrLCBub3RlLCBkYXRlLCBwcm9qZWN0LCBwcmlvcml0eSlcbiAgbmV3VG9Eby5hZGRUb0RvKClcblxuICByZW1vdmVET01UYXNrcygpXG4gIHJlbmRlckRPTVRhc2tzKClcbiAgZGVsZXRlVG9Eb0xpc3RlbmVyKClcbiAgZWRpdFRvRG9MaXN0ZW5lcigpXG5cbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgZm9ybS5yZXNldCgpXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRE9NVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgd2hpbGUgKHRhc2tzLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHRhc2tzLnJlbW92ZUNoaWxkKHRhc2tzLmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRPTVRhc2tzKCkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG5cbiAgLy8gbG9vcCBvdmVyIGFycmF5LCBhZGRpbmcgZWFjaCB0YXNrIHRvIHRoZSBwYWdlXG4gIHRvRG9MaXN0Lmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0by1kbycpXG4gICAgdGFza3MuYXBwZW5kQ2hpbGQodGFzaylcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRhc2tcbiAgICB0YXNrLmFwcGVuZCh0YXNrVGl0bGUpXG4gICAgbm90ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubm90ZVxuICAgIHRhc2suYXBwZW5kKG5vdGUpXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGF0ZVxuICAgIHRhc2suYXBwZW5kKGRhdGUpXG5cbiAgICAhcHJvamVjdC50ZXh0Q29udGVudCA9PT0gJydcbiAgICAgID8gcHJvamVjdC50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke2VsZW1lbnQucHJvamVjdH1gXG4gICAgICA6IHByb2plY3QudGV4dENvbnRlbnQgPSBlbGVtZW50LnByb2plY3RcbiAgICB0YXNrLmFwcGVuZChwcm9qZWN0KVxuXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5XG4gICAgdGFzay5hcHBlbmQocHJpb3JpdHkpXG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiXG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvLWRvJylcbiAgICB0YXNrLmFwcGVuZChlZGl0QnRuKVxuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10by1kbycpXG4gICAgdGFzay5hcHBlbmQoZGVsZXRlQnRuKVxuICB9KTtcbn1cblxuY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbW9kYWwnKVxuXG5mdW5jdGlvbiBlZGl0VG9Eb0xpc3RlbmVyKCkge1xuICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRvLWRvJylcbiAgZWRpdEJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICBlZGl0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIC8vIHBvcHVwIG1vZGFsXG4gICAgICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZWRpdEJ0bnMpXG4gICAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudClcbiAgICAgIC8vIHRhcmdldCB0aGUgaW5kZXggd2hlcmUgdGhlIGl0ZW0gaW4gYXJyYXkgaXMgYXRcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4LCAnIGVsZW1lbnQgY2xpY2tlZCcpO1xuICAgICAgY29uc29sZS5sb2codG9Eb0xpc3QubGlzdFtpbmRleF0pO1xuXG4gICAgICBjb25zdCBlZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKVxuICAgICAgY29uc3QgZWRpdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1ub3RlJylcbiAgICAgIGNvbnN0IGVkaXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpXG4gICAgICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKVxuICAgICAgY29uc3QgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJpb3JpdHknKVxuICAgICAgZWRpdFRhc2sudmFsdWUgPSB0b0RvTGlzdC5saXN0W2luZGV4XS50YXNrXG4gICAgICBlZGl0Tm90ZS52YWx1ZSA9IHRvRG9MaXN0Lmxpc3RbaW5kZXhdLm5vdGVcbiAgICAgIGVkaXREYXRlLnZhbHVlID0gdG9Eb0xpc3QubGlzdFtpbmRleF0uZGF0ZVxuICAgICAgZWRpdFByb2plY3QudmFsdWUgPSB0b0RvTGlzdC5saXN0W2luZGV4XS5wcm9qZWN0XG4gICAgICBlZGl0UHJpb3JpdHkudmFsdWUgPSB0b0RvTGlzdC5saXN0W2luZGV4XS5wcmlvcml0eVxuICAgICAgLy8gcG9wdWxhdGUgdGhlIGZpZWxkcyB3aXRoIGluZm8gZnJvbSB0aGUgYXJyYXkgaXRlbSBpbmRleFxuXG4gICAgICAvLyBcbiAgICB9KVxuICB9KTtcbn1cblxuXG5cblxuY29uc3QgcmVtb3ZlRWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2FuY2VsJylcbmNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybScpXG5cbnJlbW92ZUVkaXRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZWRpdEZvcm0ucmVzZXQoKVxuICBlZGl0TW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn0pXG5cblxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVRvRG9MaXN0ZW5lcigpIHtcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdG8tZG8nKVxuICBkZWxldGVCdG5zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbShkZWxldGVCdG5zKVxuICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGVsZW1lbnQpXG4gICAgICB0b0RvTGlzdC5saXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgIHJlbW92ZURPTVRhc2tzKClcbiAgICAgIHJlbmRlckRPTVRhc2tzKClcbiAgICAgIGVkaXRUb0RvTGlzdGVuZXIoKVxuICAgICAgZGVsZXRlVG9Eb0xpc3RlbmVyKClcbiAgICB9KVxuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVtb3ZlRE9NVGFza3MsIHJlbmRlckRPTVRhc2tzLCBkZWxldGVUb0RvTGlzdGVuZXIgfSBmcm9tICcuL3RvLWRvcy5qcyc7XG4vLyBDaGVjayBsb2NhbCBzdG9yYWdlXG5cbi8vIFJlbmRlciBTaWRlIEJhclxuXG4vLyBSZW5kZXIgbWFpbiB0by1kbydzIHNlY3Rpb25cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=