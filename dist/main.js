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
      editSubmitListener(index, editTask, editNote, editDate, editProject, editPriority)
      // /FUNCTION listen for edit-submit to be pushed
    })
  });
}

function editSubmitListener(index, editTask, editNote, editDate, editProject, editPriority) {
  const editSubmit = document.querySelector('.edit-submit')
  editSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    editToDoList(index, editTask, editNote, editDate, editProject, editPriority)
    removeDOMTasks()
    renderDOMTasks()
    deleteToDoListener()
    editToDoListener()
    // repopulate the dom
    editModal.classList.add('hidden')
    console.log(toDoList.list);
  })
}

function editToDoList(index, editTask, editNote, editDate, editProject, editPriority) {
  // replace the array item with new object
  const task = editTask.value
  const note = editNote.value
  const date = editDate.value
  const project = editProject.value
  const priority = editPriority.value

  const editedToDo = new ToDo(task, note, date, project, priority)
  toDoList.list[index] = editedToDo
  console.log(editedToDo);
  console.log(toDoList.list);
}

function submitEditToDo() {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGdCQUFnQjtBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7O0FBS0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7VUN0TUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05pRjtBQUNqRjs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZSBhIHRvZG8gYXJyYXlcbmNvbnN0IENyZWF0ZVRvRG9BcnJheSA9ICgpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuXG4gIHJldHVybiB7IGxpc3QgfVxufVxuXG5leHBvcnQgY29uc3QgdG9Eb0xpc3QgPSBDcmVhdGVUb0RvQXJyYXkoKVxuXG4vLyBDcmVhdGUgYSBjbGFzcyB0byBjcmVhdGUgdG8tZG9zXG5jbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGFzaywgbm90ZSwgZGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrXG4gICAgdGhpcy5ub3RlID0gbm90ZVxuICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gIH1cbiAgYWRkVG9EbygpIHtcbiAgICB0b0RvTGlzdC5saXN0LnB1c2godGhpcylcbiAgfVxufVxuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXG5jb25zdCBhZGROZXdUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10by1kbycpXG5cbmFkZE5ld1RvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbn0pXG5cbmNvbnN0IHJlbW92ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKVxuXG5yZW1vdmVNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9ybS5yZXNldCgpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59KVxuXG5jb25zdCBzdWJtaXRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpXG5cbnN1Ym1pdFRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gYWRkIHRvIHRoZSBhcnJheVxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKS52YWx1ZVxuICBjb25zdCBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUnKS52YWx1ZVxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZVxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZVxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlXG5cbiAgY29uc3QgbmV3VG9EbyA9IG5ldyBUb0RvKHRhc2ssIG5vdGUsIGRhdGUsIHByb2plY3QsIHByaW9yaXR5KVxuICBuZXdUb0RvLmFkZFRvRG8oKVxuXG4gIHJlbW92ZURPTVRhc2tzKClcbiAgcmVuZGVyRE9NVGFza3MoKVxuICBkZWxldGVUb0RvTGlzdGVuZXIoKVxuICBlZGl0VG9Eb0xpc3RlbmVyKClcblxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBmb3JtLnJlc2V0KClcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVET01UYXNrcygpIHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICB3aGlsZSAodGFza3MuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgdGFza3MucmVtb3ZlQ2hpbGQodGFza3MuZmlyc3RDaGlsZClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRE9NVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcblxuICAvLyBsb29wIG92ZXIgYXJyYXksIGFkZGluZyBlYWNoIHRhc2sgdG8gdGhlIHBhZ2VcbiAgdG9Eb0xpc3QubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjb25zdCBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3RvLWRvJylcbiAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrKVxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGFza1xuICAgIHRhc2suYXBwZW5kKHRhc2tUaXRsZSlcbiAgICBub3RlLnRleHRDb250ZW50ID0gZWxlbWVudC5ub3RlXG4gICAgdGFzay5hcHBlbmQobm90ZSlcbiAgICBkYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kYXRlXG4gICAgdGFzay5hcHBlbmQoZGF0ZSlcblxuICAgICFwcm9qZWN0LnRleHRDb250ZW50ID09PSAnJ1xuICAgICAgPyBwcm9qZWN0LnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7ZWxlbWVudC5wcm9qZWN0fWBcbiAgICAgIDogcHJvamVjdC50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJvamVjdFxuICAgIHRhc2suYXBwZW5kKHByb2plY3QpXG5cbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHlcbiAgICB0YXNrLmFwcGVuZChwcmlvcml0eSlcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCJcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdG8tZG8nKVxuICAgIHRhc2suYXBwZW5kKGVkaXRCdG4pXG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvLWRvJylcbiAgICB0YXNrLmFwcGVuZChkZWxldGVCdG4pXG4gIH0pO1xufVxuXG5jb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1tb2RhbCcpXG5cbmZ1bmN0aW9uIGVkaXRUb0RvTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtdG8tZG8nKVxuICBlZGl0QnRucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgIGVkaXRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgLy8gcG9wdXAgbW9kYWxcbiAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbShlZGl0QnRucylcbiAgICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihlbGVtZW50KVxuICAgICAgLy8gdGFyZ2V0IHRoZSBpbmRleCB3aGVyZSB0aGUgaXRlbSBpbiBhcnJheSBpcyBhdFxuICAgICAgY29uc29sZS5sb2coaW5kZXgsICcgZWxlbWVudCBjbGlja2VkJyk7XG4gICAgICBjb25zb2xlLmxvZyh0b0RvTGlzdC5saXN0W2luZGV4XSk7XG5cbiAgICAgIGNvbnN0IGVkaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzaycpXG4gICAgICBjb25zdCBlZGl0Tm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LW5vdGUnKVxuICAgICAgY29uc3QgZWRpdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kYXRlJylcbiAgICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpXG4gICAgICBjb25zdCBlZGl0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcmlvcml0eScpXG4gICAgICBlZGl0VGFzay52YWx1ZSA9IHRvRG9MaXN0Lmxpc3RbaW5kZXhdLnRhc2tcbiAgICAgIGVkaXROb3RlLnZhbHVlID0gdG9Eb0xpc3QubGlzdFtpbmRleF0ubm90ZVxuICAgICAgZWRpdERhdGUudmFsdWUgPSB0b0RvTGlzdC5saXN0W2luZGV4XS5kYXRlXG4gICAgICBlZGl0UHJvamVjdC52YWx1ZSA9IHRvRG9MaXN0Lmxpc3RbaW5kZXhdLnByb2plY3RcbiAgICAgIGVkaXRQcmlvcml0eS52YWx1ZSA9IHRvRG9MaXN0Lmxpc3RbaW5kZXhdLnByaW9yaXR5XG4gICAgICAvLyBwb3B1bGF0ZSB0aGUgZmllbGRzIHdpdGggaW5mbyBmcm9tIHRoZSBhcnJheSBpdGVtIGluZGV4XG4gICAgICBlZGl0U3VibWl0TGlzdGVuZXIoaW5kZXgsIGVkaXRUYXNrLCBlZGl0Tm90ZSwgZWRpdERhdGUsIGVkaXRQcm9qZWN0LCBlZGl0UHJpb3JpdHkpXG4gICAgICAvLyAvRlVOQ1RJT04gbGlzdGVuIGZvciBlZGl0LXN1Ym1pdCB0byBiZSBwdXNoZWRcbiAgICB9KVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdFN1Ym1pdExpc3RlbmVyKGluZGV4LCBlZGl0VGFzaywgZWRpdE5vdGUsIGVkaXREYXRlLCBlZGl0UHJvamVjdCwgZWRpdFByaW9yaXR5KSB7XG4gIGNvbnN0IGVkaXRTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1zdWJtaXQnKVxuICBlZGl0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlZGl0VG9Eb0xpc3QoaW5kZXgsIGVkaXRUYXNrLCBlZGl0Tm90ZSwgZWRpdERhdGUsIGVkaXRQcm9qZWN0LCBlZGl0UHJpb3JpdHkpXG4gICAgcmVtb3ZlRE9NVGFza3MoKVxuICAgIHJlbmRlckRPTVRhc2tzKClcbiAgICBkZWxldGVUb0RvTGlzdGVuZXIoKVxuICAgIGVkaXRUb0RvTGlzdGVuZXIoKVxuICAgIC8vIHJlcG9wdWxhdGUgdGhlIGRvbVxuICAgIGVkaXRNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGNvbnNvbGUubG9nKHRvRG9MaXN0Lmxpc3QpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBlZGl0VG9Eb0xpc3QoaW5kZXgsIGVkaXRUYXNrLCBlZGl0Tm90ZSwgZWRpdERhdGUsIGVkaXRQcm9qZWN0LCBlZGl0UHJpb3JpdHkpIHtcbiAgLy8gcmVwbGFjZSB0aGUgYXJyYXkgaXRlbSB3aXRoIG5ldyBvYmplY3RcbiAgY29uc3QgdGFzayA9IGVkaXRUYXNrLnZhbHVlXG4gIGNvbnN0IG5vdGUgPSBlZGl0Tm90ZS52YWx1ZVxuICBjb25zdCBkYXRlID0gZWRpdERhdGUudmFsdWVcbiAgY29uc3QgcHJvamVjdCA9IGVkaXRQcm9qZWN0LnZhbHVlXG4gIGNvbnN0IHByaW9yaXR5ID0gZWRpdFByaW9yaXR5LnZhbHVlXG5cbiAgY29uc3QgZWRpdGVkVG9EbyA9IG5ldyBUb0RvKHRhc2ssIG5vdGUsIGRhdGUsIHByb2plY3QsIHByaW9yaXR5KVxuICB0b0RvTGlzdC5saXN0W2luZGV4XSA9IGVkaXRlZFRvRG9cbiAgY29uc29sZS5sb2coZWRpdGVkVG9Ebyk7XG4gIGNvbnNvbGUubG9nKHRvRG9MaXN0Lmxpc3QpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFZGl0VG9EbygpIHtcblxufVxuXG5cbmNvbnN0IHJlbW92ZUVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNhbmNlbCcpXG5jb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0nKVxuXG5yZW1vdmVFZGl0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGVkaXRGb3JtLnJlc2V0KClcbiAgZWRpdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59KVxuXG5cblxuXG5mdW5jdGlvbiBkZWxldGVUb0RvTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXRvLWRvJylcbiAgZGVsZXRlQnRucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZGVsZXRlQnRucylcbiAgICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihlbGVtZW50KVxuICAgICAgdG9Eb0xpc3QubGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICByZW1vdmVET01UYXNrcygpXG4gICAgICByZW5kZXJET01UYXNrcygpXG4gICAgICBlZGl0VG9Eb0xpc3RlbmVyKClcbiAgICAgIGRlbGV0ZVRvRG9MaXN0ZW5lcigpXG4gICAgfSlcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbW92ZURPTVRhc2tzLCByZW5kZXJET01UYXNrcywgZGVsZXRlVG9Eb0xpc3RlbmVyIH0gZnJvbSAnLi90by1kb3MuanMnO1xuLy8gQ2hlY2sgbG9jYWwgc3RvcmFnZVxuXG4vLyBSZW5kZXIgU2lkZSBCYXJcblxuLy8gUmVuZGVyIG1haW4gdG8tZG8ncyBzZWN0aW9uXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9