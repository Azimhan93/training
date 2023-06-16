import TodoApi from "../TodoApi.js";

class Collection {
  #list = [];

  save(todo) {
    return TodoApi
      .create(todo)
      .then(newTodo => this.addList(newTodo));
  }

  fetch() {
    return TodoApi
      .getList()
      .then(list => this.setList(list));
  }

  delete(id) {
    return TodoApi
      .delete(id)
      .then(() => {
        const list = this.#list.filter(item => item.id !== id);
        this.setList(list);
      });
  }

  setList(list) {
    this.#list = list;
  }

  getList() {
    return this.#list;
  }

  addList(todo) { 
    this.#list.push(todo);

  }
}

export default Collection;