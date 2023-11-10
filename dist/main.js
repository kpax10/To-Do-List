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
  console.log(task);
  const note = editNote.value
  const date = editDate.value
  const project = editProject.value
  const priority = editPriority.value

  const editedToDo = new ToDo(task, note, date, project, priority)


  // remove existing todo first?
  toDoList.list[index] = editedToDo
  console.log(editedToDo);
  console.log(toDoList.list);
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
      console.log(toDoList.list);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGdCQUFnQjtBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7QUFLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7O1VDdE1BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOaUY7QUFDakY7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvLWRvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGUgYSB0b2RvIGFycmF5XG5jb25zdCBDcmVhdGVUb0RvQXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcblxuICByZXR1cm4geyBsaXN0IH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvRG9MaXN0ID0gQ3JlYXRlVG9Eb0FycmF5KClcblxuLy8gQ3JlYXRlIGEgY2xhc3MgdG8gY3JlYXRlIHRvLWRvc1xuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRhc2ssIG5vdGUsIGRhdGUsIHByb2plY3QsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50YXNrID0gdGFza1xuICAgIHRoaXMubm90ZSA9IG5vdGVcbiAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB9XG4gIGFkZFRvRG8oKSB7XG4gICAgdG9Eb0xpc3QubGlzdC5wdXNoKHRoaXMpXG4gIH1cbn1cblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuY29uc3QgYWRkTmV3VG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tZG8nKVxuXG5hZGROZXdUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59KVxuXG5jb25zdCByZW1vdmVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJylcblxucmVtb3ZlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGZvcm0ucmVzZXQoKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufSlcblxuY29uc3Qgc3VibWl0VG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuXG5zdWJtaXRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vIGFkZCB0byB0aGUgYXJyYXlcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJykudmFsdWVcbiAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlJykudmFsdWVcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWVcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZVxuXG4gIGNvbnN0IG5ld1RvRG8gPSBuZXcgVG9Ebyh0YXNrLCBub3RlLCBkYXRlLCBwcm9qZWN0LCBwcmlvcml0eSlcbiAgbmV3VG9Eby5hZGRUb0RvKClcblxuICByZW1vdmVET01UYXNrcygpXG4gIHJlbmRlckRPTVRhc2tzKClcbiAgZGVsZXRlVG9Eb0xpc3RlbmVyKClcbiAgZWRpdFRvRG9MaXN0ZW5lcigpXG5cbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgZm9ybS5yZXNldCgpXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRE9NVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgd2hpbGUgKHRhc2tzLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHRhc2tzLnJlbW92ZUNoaWxkKHRhc2tzLmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRPTVRhc2tzKCkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG5cbiAgLy8gbG9vcCBvdmVyIGFycmF5LCBhZGRpbmcgZWFjaCB0YXNrIHRvIHRoZSBwYWdlXG4gIHRvRG9MaXN0Lmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0by1kbycpXG4gICAgdGFza3MuYXBwZW5kQ2hpbGQodGFzaylcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRhc2tcbiAgICB0YXNrLmFwcGVuZCh0YXNrVGl0bGUpXG4gICAgbm90ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubm90ZVxuICAgIHRhc2suYXBwZW5kKG5vdGUpXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGF0ZVxuICAgIHRhc2suYXBwZW5kKGRhdGUpXG5cbiAgICAhcHJvamVjdC50ZXh0Q29udGVudCA9PT0gJydcbiAgICAgID8gcHJvamVjdC50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke2VsZW1lbnQucHJvamVjdH1gXG4gICAgICA6IHByb2plY3QudGV4dENvbnRlbnQgPSBlbGVtZW50LnByb2plY3RcbiAgICB0YXNrLmFwcGVuZChwcm9qZWN0KVxuXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5XG4gICAgdGFzay5hcHBlbmQocHJpb3JpdHkpXG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiXG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvLWRvJylcbiAgICB0YXNrLmFwcGVuZChlZGl0QnRuKVxuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10by1kbycpXG4gICAgdGFzay5hcHBlbmQoZGVsZXRlQnRuKVxuICB9KTtcbn1cblxuY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbW9kYWwnKVxuXG5mdW5jdGlvbiBlZGl0VG9Eb0xpc3RlbmVyKCkge1xuICBjb25zdCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRvLWRvJylcbiAgZWRpdEJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICBlZGl0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIC8vIHBvcHVwIG1vZGFsXG4gICAgICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZWRpdEJ0bnMpXG4gICAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudClcbiAgICAgIC8vIHRhcmdldCB0aGUgaW5kZXggd2hlcmUgdGhlIGl0ZW0gaW4gYXJyYXkgaXMgYXRcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4LCAnIGVsZW1lbnQgY2xpY2tlZCcpO1xuICAgICAgY29uc29sZS5sb2codG9Eb0xpc3QubGlzdFtpbmRleF0pO1xuXG4gICAgICBjb25zdCBlZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKVxuICAgICAgY29uc3QgZWRpdE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1ub3RlJylcbiAgICAgIGNvbnN0IGVkaXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpXG4gICAgICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKVxuICAgICAgY29uc3QgZWRpdFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJpb3JpdHknKVxuICAgICAgZWRpdFRhc2sudmFsdWUgPSB0b0RvTGlzdC5saXN0W2luZGV4XS50YXNrXG4gICAgICBlZGl0Tm90ZS52YWx1ZSA9IHRvRG9MaXN0Lmxpc3RbaW5kZXhdLm5vdGVcbiAgICAgIGVkaXREYXRlLnZhbHVlID0gdG9Eb0xpc3QubGlzdFtpbmRleF0uZGF0ZVxuICAgICAgZWRpdFByb2plY3QudmFsdWUgPSB0b0RvTGlzdC5saXN0W2luZGV4XS5wcm9qZWN0XG4gICAgICBlZGl0UHJpb3JpdHkudmFsdWUgPSB0b0RvTGlzdC5saXN0W2luZGV4XS5wcmlvcml0eVxuICAgICAgLy8gcG9wdWxhdGUgdGhlIGZpZWxkcyB3aXRoIGluZm8gZnJvbSB0aGUgYXJyYXkgaXRlbSBpbmRleFxuICAgICAgZWRpdFN1Ym1pdExpc3RlbmVyKGluZGV4LCBlZGl0VGFzaywgZWRpdE5vdGUsIGVkaXREYXRlLCBlZGl0UHJvamVjdCwgZWRpdFByaW9yaXR5KVxuICAgICAgLy8gL0ZVTkNUSU9OIGxpc3RlbiBmb3IgZWRpdC1zdWJtaXQgdG8gYmUgcHVzaGVkXG4gICAgfSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRTdWJtaXRMaXN0ZW5lcihpbmRleCwgZWRpdFRhc2ssIGVkaXROb3RlLCBlZGl0RGF0ZSwgZWRpdFByb2plY3QsIGVkaXRQcmlvcml0eSkge1xuICBjb25zdCBlZGl0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtc3VibWl0JylcbiAgZWRpdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZWRpdFRvRG9MaXN0KGluZGV4LCBlZGl0VGFzaywgZWRpdE5vdGUsIGVkaXREYXRlLCBlZGl0UHJvamVjdCwgZWRpdFByaW9yaXR5KVxuICAgIHJlbW92ZURPTVRhc2tzKClcbiAgICByZW5kZXJET01UYXNrcygpXG4gICAgZGVsZXRlVG9Eb0xpc3RlbmVyKClcbiAgICBlZGl0VG9Eb0xpc3RlbmVyKClcbiAgICAvLyByZXBvcHVsYXRlIHRoZSBkb21cbiAgICBlZGl0TW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb25zb2xlLmxvZyh0b0RvTGlzdC5saXN0KTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZWRpdFRvRG9MaXN0KGluZGV4LCBlZGl0VGFzaywgZWRpdE5vdGUsIGVkaXREYXRlLCBlZGl0UHJvamVjdCwgZWRpdFByaW9yaXR5KSB7XG4gIC8vIHJlcGxhY2UgdGhlIGFycmF5IGl0ZW0gd2l0aCBuZXcgb2JqZWN0XG4gIGNvbnN0IHRhc2sgPSBlZGl0VGFzay52YWx1ZVxuICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgY29uc3Qgbm90ZSA9IGVkaXROb3RlLnZhbHVlXG4gIGNvbnN0IGRhdGUgPSBlZGl0RGF0ZS52YWx1ZVxuICBjb25zdCBwcm9qZWN0ID0gZWRpdFByb2plY3QudmFsdWVcbiAgY29uc3QgcHJpb3JpdHkgPSBlZGl0UHJpb3JpdHkudmFsdWVcblxuICBjb25zdCBlZGl0ZWRUb0RvID0gbmV3IFRvRG8odGFzaywgbm90ZSwgZGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpXG5cblxuICAvLyByZW1vdmUgZXhpc3RpbmcgdG9kbyBmaXJzdD9cbiAgdG9Eb0xpc3QubGlzdFtpbmRleF0gPSBlZGl0ZWRUb0RvXG4gIGNvbnNvbGUubG9nKGVkaXRlZFRvRG8pO1xuICBjb25zb2xlLmxvZyh0b0RvTGlzdC5saXN0KTtcbn1cblxuY29uc3QgcmVtb3ZlRWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2FuY2VsJylcbmNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybScpXG5cbnJlbW92ZUVkaXRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZWRpdEZvcm0ucmVzZXQoKVxuICBlZGl0TW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn0pXG5cblxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVRvRG9MaXN0ZW5lcigpIHtcbiAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdG8tZG8nKVxuICBkZWxldGVCdG5zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbShkZWxldGVCdG5zKVxuICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGVsZW1lbnQpXG4gICAgICB0b0RvTGlzdC5saXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgIHJlbW92ZURPTVRhc2tzKClcbiAgICAgIHJlbmRlckRPTVRhc2tzKClcbiAgICAgIGVkaXRUb0RvTGlzdGVuZXIoKVxuICAgICAgZGVsZXRlVG9Eb0xpc3RlbmVyKClcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9MaXN0Lmxpc3QpO1xuICAgIH0pXG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZW1vdmVET01UYXNrcywgcmVuZGVyRE9NVGFza3MsIGRlbGV0ZVRvRG9MaXN0ZW5lciB9IGZyb20gJy4vdG8tZG9zLmpzJztcbi8vIENoZWNrIGxvY2FsIHN0b3JhZ2VcblxuLy8gUmVuZGVyIFNpZGUgQmFyXG5cbi8vIFJlbmRlciBtYWluIHRvLWRvJ3Mgc2VjdGlvblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==