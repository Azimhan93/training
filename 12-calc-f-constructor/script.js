'use strict'

const calc = new Сalculator(100);

  
calc.add(10); // 110 записывает в this.base (в консоль ничего выводить не нужно)

calc.add(10); // 120 записывает в this.base (в консоль ничего выводить не нужно)

calc.sub(20); // 100 записывает в this.base (в консоль ничего выводить не нужно)

calc.set(20); // 20 записывает в this.base (в консоль ничего выводить не нужно)

calc.add(10); // 30 записывает в this.base (в консоль ничего выводить не нужно)

calc.add('qwe'); // игнорируем все что не число и значение 30 не меняется

console.log(calc.get()); // 30 возвращаем значение

function Сalculator(base) {

    function isValidNuber(num) {
        return isNaN(num);
    }

    this.add = function(num) {
        this.base = isValidNuber(num) ? this.base : this.base + num;
        return this.base;
    },

    this.sub = function(num) {
        this.base = isValidNuber(num) ? this.base : this.base - num;
        return this.base;
    },

    this.set = function(num) {
        this.base = isValidNuber(num) ? this.base : num;
        return this.base;
    },

    this.get = function(num) {
        return this.base;
    }
}

