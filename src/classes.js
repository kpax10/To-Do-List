export class Project {
  constructor(name) {
    this.name = name
    this.toDos = []
  }
}

export class ToDo {
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
