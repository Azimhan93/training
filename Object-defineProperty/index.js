let obj = {
    name: 'John',
    age: 26,
    city: 'London'
};

Object.defineProperty(obj, 'surName', {
    value: 'Jackson',
    writable: true,
    configurable: false,
    enumerable: true,
});

obj.name = 'Peter';


console.log(Object.getOwnPropertyDescriptors(obj));
