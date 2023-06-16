class Contact {
    static async getList() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    }

    static async createList(user) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });

        return await response.json();
    } 
}


export default Contact;