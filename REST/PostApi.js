class PostApi {
    static URL = 'https://6395f61590ac47c680791218.mockapi.io/posts/';

    static async getList() {
        const res = await fetch(this.URL);
        if(res.ok) {
            return res.json();
        }
        throw new Error('Can not get a new post');
    }

    static async getOne(id) {
        const res = await fetch(this.URL + id);
        if (res.ok) {
            return res.json();
        }
        throw new Error(`Can not get a post with id ${id}`);
    }

    static async create(post) {
        const res = await fetch(this.URL, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            return res.json();
        }
        throw new Error(`Can not create post`);
    }

    static async update(id, post) {
        const res = await fetch(this.URL + id, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            return res.json();
        }
        throw new Error(`Can not update post`);
    }

    static async delete(id) {
        const res = await fetch(this.URL + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            return res.json();
        }
        throw new Error(`Can not delete post`);
    }
}

export default PostApi;