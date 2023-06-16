class TodoApi {
    static URL = 'https://62054479161670001741b708.mockapi.io/api/todo/';

    static async getList() {
        const res = await fetch(this.URL);
        if (res.ok) {
            return res.json();
        }
        throw new Error('Can not get list todo');
    }

    static async getOne(id) {
        const res = await fetch(this.URL + id);
        if (res.ok) {
            return res.json();
        }
        throw new Error('Can not get id in list todo');
    }

    static async create(todo) {
        const res = await fetch(this.URL, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (res.ok) {
            return res.json();
        }
        throw new Error('Can not create list todo');
    }

    static async update(id, todo) {
        const res = await fetch(this.URL + id, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (res.ok) {
            return res.json();
        }
        throw new Error('Can not update list todo');
    }

    static async delete(id) {
        const res = await fetch(this.URL + id, {
            method: 'DELETE',
        });
        console.log(res);
        if (res.ok) {
            return res.json();
        }
        throw new Error('Can not delete list todo');
    }

}

export default TodoApi;