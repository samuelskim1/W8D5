//with args keyword
// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// };

//with rest operator
// function sum2(...args) {
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     return sum;
// }



// console.log(sum2(1, 2, 3, 4))
// console.log(sum2(1, 2, 3, 4, 5))


class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

/*
// debugger;
Function.prototype.myBind = function (context) {
    let that = this; // this = markov.says
    let bindTimeArgs = Array.from(arguments).slice(1);
    // debugger;
    return function () {
        debugger;
        const args = bindTimeArgs.concat(Array.from(arguments));


        that.apply(context, args);
    }
}

const notMarkovSays = markov.says.myBind(pavlov, "meow");
notMarkovSays("me");
*/

// Function.prototype.myBind = function (...args) {
//     let that = this;
//     let context = args[0];
//     let bindTimeArgs = args.slice(1, args.length);

//     return function (...callTimeArgs) {
//         const allArgs = bindTimeArgs.concat(callTimeArgs); // why is + so weird
//         that.apply(context, allArgs);
//     }
// }

// const notMarkovSays = markov.says.myBind(pavlov, "meow");
// notMarkovSays("me");