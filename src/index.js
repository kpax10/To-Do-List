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