import ListView from "../View/ListView.js";
import Collection from "../Model/Collection.js";
import FormView from "../View/FormView.js";

class Controller {
  constructor($container) {
    this.$container = $container;

    this.collection = new Collection();

    this.formView = new FormView({
      onSubmit: (contact) => this.collection.save(contact).then(() => this.renderList()),
    })
    this.listView = new ListView({
      onDelete: id => this.collection.delete(id).then(() => this.renderList()),
    });

    this.listView.appendTo(this.$container);
    this.formView.appendTo(this.$container);
    this.collection.fetch().then(() => this.renderList());
  }

  renderList() {
    this.listView.renderList(this.collection.getList());
  }
}

export default Controller;