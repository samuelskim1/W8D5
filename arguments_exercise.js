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


// debugger;
Function.prototype.myBind = function (context) {
    let that = this; // this = markov.says
    let bindTimeArgs = Array.from(arguments).slice(1, arguments.length);
    // debugger;
    return function () {
        debugger;
        args = bindTimeArgs + Array.from(arguments);


        that.apply(context, args);
    }
}

const notMarkovSays = markov.says.myBind(pavlov, "meow");
notMarkovSays("me");
