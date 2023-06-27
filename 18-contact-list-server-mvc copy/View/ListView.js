class ListView {
  static DONE_CLASS = 'done';
  static CONTACT_ITEM_SELECTOR = '.contactItem';

  constructor(options) {
    this.options = options;
    this.$rootEl = this.initView();
  }

  initView() {
    return $(`<table></table>`)
      .on('click', '.deleteBtn', this.onRemoveBtnClick.bind(this));
  }

  onRemoveBtnClick(e) {
    const id = this.getTodoElId(e.target);

    this.options.onDelete(id);
  }

  appendTo($container) {
    $container.append( this.$rootEl);
  }

  renderList(list) {
    const html = list.map(this.generateTodoHTML).join('');

     this.$rootEl.html(html);
  }

  generateTodoHTML(contact) {
    const done = contact.status ? ListView.DONE_CLASS : '';

    return `
   
      <tbody id="contactList">

        <tr class ="contactItem" ${done} data-id="${contact.id}" data-status="${contact.status}">
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.phone}</td>
            <td><button type="button" class="deleteBtn">Удалить</td>
        </tr>

      </tbody>
      
    `
  }

  getTodoElId(el) {
    return el.closest(ListView.CONTACT_ITEM_SELECTOR).dataset.id;
  }
}

export default ListView;