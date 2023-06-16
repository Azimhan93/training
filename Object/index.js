let obj = {
    name: 'John',
    surname: 'Mclane',
    age: 25,
    height: 185,
    yearOfBirth: 2002,

    get fullName() {
        return `${this.name} ${this.surname} my age: ${this.age}`;
    },

    set fullName(value) {
        let arr = value.split();
        this.name = arr[0];
        this.surname = arr[1];
        this.age = arr[2];
    },

    get fullAge() {
        let currentYear = new Date().getFullYear();
        return `${currentYear - this.yearOfBirth}`;
    }
};

console.log(obj.fullAge);
