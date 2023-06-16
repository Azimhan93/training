class Comment {

    static URL = 'https://jsonplaceholder.typicode.com/users'; 

    static async getList() {
        const res = await fetch(this.URL);
        if (res.ok) {
            return res.json();
        }
        throw new Error('Can not get list of users');
    }
}


export default Comment;