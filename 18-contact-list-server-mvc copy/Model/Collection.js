import ContactApi from "../ContactApi.js";

class Collection {
  #list = [];

  save(contact) {
    return ContactApi
      .create(contact)
      .then(newContact => this.addList(newContact));
  }

  fetch() {
    return ContactApi
      .getList()
      .then(list => this.setList(list));
  }

  delete(id) {
    return ContactApi
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

  addList(contact) { 
    this.#list.push(contact);

  }
}

export default Collection;