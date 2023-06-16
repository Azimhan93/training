class FormView {
  
    constructor(options) {
      this.options = options;
      this.$rootEl = this.initView();
      this.$inputs = this.$rootEl.find('input, textarea');

    }
  
    initView() {
      return $(`
        <form id="contactForm">
          <table>
              <tr>
                  <th>Имя</th>
                  <th>Фамилия</th>
                  <th>Телефон</th>
                  <th>Действие</th>
              </tr>

              <tbody id="contactList"></tbody>

              <td><input type="text" name="firstName" id="nameInput" class="formInput"></td>
              <td><input type="text" name="lastName" id="nameSername" class="formInput"></td>
              <td><input type="text" name="phone" id="namePhone" class="formInput"></td>
              <td><button id="addContactBtn">Добавить</td>
          </table>
        </form>
      `)
        .on('submit', e => this.onFormSubmit(e));
    }

    onFormSubmit(e) {
        e.preventDefault();

        const contact = this.getFormData();
      
        this.options.onSubmit(contact);

    }

    getFormData() {
        const res = {};

        for(let input of this.$inputs) {
            res[input.name] = input.value;
        }

        return res;
    }
  
    appendTo($container) {
      $container.append(this.$rootEl);
    }
  }
  
  export default FormView;