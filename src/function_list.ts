export const sumOfTwo = (x: number, y: number) : Number => {
    return x + y;
};

export const gluingNumbers = (x: number, y: number) : String => {
    return `${x} + ${y}`;
};

export const square = (x: number) => {
    return x * x;
};

export const multiplyOfTwo = (x: number, y: number) => {
    return x * y;
};

export const halverOfTwo = (x: number, y: number) => {
    return x / y;
};

export const genericValueReturn = <T>(value: T) : T => {
    return value;
};

export const stringName = (value: String) : String => {
    return `HI my name is ${value}`;
}

interface nameBuilder {
    (name: string, surname: string, age?: any);
}

export const getFullName: nameBuilder = (name: string, surname: string, age: any) => {
    return `Name: ${name}, Surname: ${surname}, age: ${age ? age : 'Unknown'}`
}

console.log(sumOfTwo(2, 5));
console.log(square(5));
console.log(square(11));
console.log(halverOfTwo(2, 5));
console.log(multiplyOfTwo(5, 1));
console.log(halverOfTwo(2, 10));
console.log(genericValueReturn<String>('HI'));
console.log(genericValueReturn<Number>(15));
console.log(genericValueReturn<String>('lol'));
console.log(genericValueReturn([1, 2, 'hi']));
console.log(getFullName("Niki4", "thePro"));
console.log(getFullName('Sanka', 'Molodec', 35));
