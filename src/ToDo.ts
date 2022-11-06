import IToDo from "./IToDo";

export default class ToDo {
  public todos: IToDo[] = [];
  constructor() {}

  addTodo(todo: IToDo): IToDo {
    this.todos.push(todo);
    return todo;
  }

  removeToDo(id: number): void {
    // const index = this.todos.findIndex((object) => {
    //   return object.id === id;
    // });
    // console.log(index);
    this.todos = this.todos.filter((el) => {
      return el.id !== id;
    });
    // this.todos.slice(index, 1);
    // delete this.todos[index];
  }

  getList(): IToDo[] {
    return this.todos;
  }
}
