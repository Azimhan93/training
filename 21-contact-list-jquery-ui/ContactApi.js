class ContactApi {
    static URL = 'https://6395f61590ac47c680791218.mockapi.io/contacts/';

    static getList() {
        return fetch(this.URL).then((res) => {
            if(res.ok) {
               return res.json();
            }
            

            throw new Error('Can not get todo with ${id}');
        });
    }

    static getOne(id) {
        return fetch(this.URL + id).then((res) => {
            if(res.ok) {
               return res.json();
            }

            throw new Error('Can not get id in list contact');
        });
    }

    static create(contact) {
        return fetch(this.URL, {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            if(res.ok) {
               return res.json();
            }

            throw new Error('Can not create contact');
        });
    }

    static update(id, contact) {
        return fetch(this.URL + id, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            if(res.ok) {
               return res.json();
            }

            throw new Error('Can not update todo with ${id}');
        });
    }

    static delete(id) {
        return fetch(this.URL + id, {
            method: 'DELETE',
        }).then((res) => {
            console.log(res);
            if(res.ok) {
               return res.json();
            }

            throw new Error('Can not delete todo with ${id}');
        });
    }

}


export default ContactApi;