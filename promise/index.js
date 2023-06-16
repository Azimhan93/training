const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.floor(Math.random() * 100);

        number > 50 ? resolve(number) : reject(number);
    }, 5000)
});

promise
    .then(result => console.log(`This number ${result} is right. Well done!`))
    .catch(result => console.log(`This number ${result} is wrong`));