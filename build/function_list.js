"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfTwo = function (x, y) {
    return x + y;
};
exports.gluingNumbers = function (x, y) {
    return x + " + " + y;
};
exports.square = function (x) {
    return x * x;
};
exports.multiplyOfTwo = function (x, y) {
    return x * y;
};
exports.halverOfTwo = function (x, y) {
    return x / y;
};
exports.genericValueReturn = function (value) {
    return value;
};
exports.stringName = function (value) {
    return "HI my name is " + value;
};
exports.getFullName = function (name, surname, age) {
    return "Name: " + name + ", Surname: " + surname + ", age: " + (age ? age : 'Unknown');
};
console.log(exports.sumOfTwo(2, 5));
console.log(exports.square(5));
console.log(exports.square(11));
console.log(exports.halverOfTwo(2, 5));
console.log(exports.multiplyOfTwo(5, 1));
console.log(exports.halverOfTwo(2, 10));
console.log(exports.genericValueReturn('HI'));
console.log(exports.genericValueReturn(15));
console.log(exports.genericValueReturn('lol'));
console.log(exports.genericValueReturn([1, 2, 'hi']));
console.log(exports.getFullName("Niki4", "thePro"));
console.log(exports.getFullName('Sanka', 'Molodec', 35));
