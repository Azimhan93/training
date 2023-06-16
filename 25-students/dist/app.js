class StudentsApi{static URL="https://62057f8a161670001741bbf0.mockapi.io/todo/";static listStudents(){return fetch(this.URL).then(this.checkRes)}static checkRes(t){return t.ok?t.json():new Error("Can't get elements from list")}static delete(t){return fetch(this.URL+t,{method:"DELETE"}).then(this.checkRes)}static update(t,e){return fetch(this.URL+t,{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then(this.checkRes)}static create(t){return fetch(this.URL,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}}).then(this.checkRes)}}class Controller{constructor(t){this.$container=t,this.collection=new Collection,this.studentsView=new StudentsView({onDelete:t=>{t.remove(),this.collection.delete(t.dataset.id)},mouseOut:(t,e)=>{this.collection.update(t,e)}}),this.formView=new FormView({onsubmit:t=>{this.collection.create(t).then(t=>{this.getList()})}}),this.studentsView.appendTo(this.$container),this.formView.appendTo(this.$container),this.collection.fetch().then(()=>this.getList())}getList(){this.studentsView.showStudentsListHtml(this.collection.getList())}}class Collection{#list=[];fetch(){return StudentsApi.listStudents().then(t=>this.setList(t))}setList(t){this.#list=t}getList(){return this.#list}delete(t){StudentsApi.delete(t)}update(t,e){StudentsApi.update(t,e)}create(t){return StudentsApi.create(t).then(t=>this.#list.push(t))}}class FormView{constructor(t){this.options=t,this.$rootEl=this.initView()}initView(){return $(`<form>
        <input class="input" type="text" />
        <button type="submit">Save</button>
    </form>`).on("submit",t=>this.onSubmitForm(t))}onSubmitForm(t){t.preventDefault();var t=t.target.querySelector("input"),e={name:t.value,marks:this.newStudentMarks()};this.resetForm(t),this.options.onsubmit(e)}newStudentMarks(){let e=[];for(let t=0;t<10;t++)e[t]=0;return e}appendTo(t){t.append(this.$rootEl)}resetForm(t){t.value=""}}class StudentsView{constructor(t){this.options=t,this.$rootEl=this.initView(),this.$rootEl.on("focusout",".inputMark",t=>this.onInputOut(t)),this.$rootEl.on("click",".btnDel",t=>this.onBtnDelClick(t))}initView(){return $(`<table><tr class="header">
        <td>Student's name</td>
        <td>Marks</td>
        <td>Options</td>
    </tr></table>`)}appendTo(t){t.append(this.$rootEl)}onInputOut(t){const s=this.getItem(t).dataset.id,i=t.target.dataset.num,n=t.target.value;StudentsApi.listStudents().then(t=>{let e=this.findStudent(t,s);t=Object.keys(e.marks).find(t=>t===i);e.marks[t]=n,this.options.mouseOut(s,e)})}findStudent(t,e){return t.find(t=>t.id===e)}onBtnDelClick(t){t=this.getItem(t);this.options.onDelete(t)}getItem(t){return t.target.closest("tr")}showStudentsListHtml(t){t=t.map(this.replaceHtmlStudent).join("");this.$rootEl.html(t)}replaceHtmlStudent(t){var e=Object.keys(t.marks);return`<tr data-id="${t.id}">
        <td>${t.name}</td>
        <td>
            <input class="inputMark" data-num="${e[0]}" value="${t.marks[0]}" type="text" />
            <input class="inputMark" data-num="${e[1]}" value="${t.marks[1]}" type="text" />
            <input class="inputMark" data-num="${e[2]}" value="${t.marks[2]}" type="text" />
            <input class="inputMark" data-num="${e[3]}" value="${t.marks[3]}" type="text" />
            <input class="inputMark" data-num="${e[4]}" value="${t.marks[4]}" type="text" />
            <input class="inputMark" data-num="${e[5]}" value="${t.marks[5]}" type="text" />
            <input class="inputMark" data-num="${e[6]}" value="${t.marks[6]}" type="text" />
            <input class="inputMark" data-num="${e[7]}" value="${t.marks[7]}" type="text" />
            <input class="inputMark" data-num="${e[8]}" value="${t.marks[8]}" type="text" />
            <input class="inputMark" data-num="${e[9]}" value="${t.marks[9]}" type="text" />
        </td>
        <td> <button class="btnDel">Delete</button></td>
    </tr>`}}new Controller($("#container"));
//# sourceMappingURL=app.js.map
