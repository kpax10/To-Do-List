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
