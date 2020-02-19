console.clear();
const coffes = [{
        name: "El Meson",
        lat: 42.002439,
        long: -87.672339,
        neighborhood: "Rogers Park",
        ambiance: "4/5",
        flavor: "5/5",
        comments: "Best cappuccino and croissant I’ve ever had."
    },
    {
        name: "Wormhole",
        lat: 41.908415,
        long: -87.674605,
        neighborhood: "Wicker Park",
        ambiance: "5/5",
        flavor: "4/5",
        comments: "Cute ambiance with a Nintendo that actually works properly and the best games (including FF1!)."
    },
    {
        name: "Ipsento",
        lat: 41.918639,
        long: -87.687247,
        neighborhood: "Wicker Park",
        ambiance: "4/5",
        flavor: "5/5",
        comments: "Really great spicy latte. Nice ambiance."
    }
];


// 1. Save in a new array all coffes comments to another random comment
var ex1 = coffes.map(function(coffee) {

    return {
        ...coffee,
        comments: "random coments"
    }
});

/* console.log(ex1);
[
  {
    ...
    comments: “random comment”
  },
  {
    ...
    comments: “random comment”
  },
  {
    ...
    comments: “random comment”
  }
]
*/


// 2. Save in a new array coffees name and comments
var ex2 = coffes.map(coffe => {
    return { name: coffe.name, coments: coffe.comments };
});


/*   console.log(ex2);
[
  {
    name: “El Meson”,
    comments: “Best cappuccino and croissant I’ve ever had.”
  },
  {
    name: “Wormhole”,
    comments:
      “Cute ambiance with a Nintendo that actually works properly and the best games (including FF1!).”
  },
  {
    name: “Ipsento”,
    comments: “Really great spicy latte. Nice ambiance.”
  }
];
*/






// 3. Find the coffee object which has the name of “Wormhole”
const ex3 = coffes.find((coffee) => {
    return coffee.name === "Wormhole";
});

/*
  {
    name: “Wormhole”,
    lat: 41.908415,
    long: -87.674605,
    neighborhood: “Wicker Park”,
    ambiance: “5/5",
    flavor: “4/5”,
    comments:
      “Cute ambiance with a Nintendo that actually works properly and the best games (including FF1!).”
  }
*/

// 4. Save in a object where the key is the name of the coffee and it’s an object of it’s latitude and longitude

const ex4 = coffes.reduce((acumulator, currentValue) => {
    return {
        ...acumulator,
        [currentValue.name]: {
            lat: currentValue.lat,
            long: currentValue.long
        }
    }

}, {});




/*
{
  “El Meson”: {
    lat: 42.002439,
    long: -87.672339
  },
  “Wormhole”: {
    lat: 41.908415,
    long: -87.674605
  },
  “Ipsento”: {
    lat: 41.918639,
    long: -87.687247
  }
}
*/
const students = [
    { name: "Quincy", grade: 96 },
    { name: "Jason", grade: 84 },
    { name: "Alexis", grade: 100 },
    { name: "Sam", grade: 65 },
    { name: "Katie", grade: 90 }
];

// 1. in a new array the students which have a grade greater or equal to 90
var ex11 = students.filter(coffe => {
    return coffe.grade >= 90
});


/*
[
  { name: ‘Quincy’, grade: 96 },
  { name: ‘Alexis’, grade: 100 },
  { name: ‘Katie’, grade: 90 }
]
*/
const numbers = [1, 10, 7, 6, 5]

// 1. Using .reduce tell what is the total amount of numbers
const sum = numbers.reduce((acumulator, currentValue) => {

    return currentValue + acumulator;
}, 0);

// 29


// 2. Sum all numbers as exercise 1. but starting at 5 instead of 0
const sum1 = numbers.reduce((acumulator, currentValue) => {
    return currentValue + acumulator
}, 5);

// 34


// 3. a new array with each number incremented by one
// [2, 11, 8, 7, 5]
const sum2 = numbers.map((number) => {
    return number = number + 1;
});

const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
// 1.  transform an array of strings into a single object that shows
//        how many times each string appears in the array


const sum3 = pets.reduce((acumulator, currentValue) => {
    if (acumulator[currentValue] >= 1) {
        acumulator[currentValue] = acumulator[currentValue] + 1;
        return acumulator;
    }

    return {
        ...acumulator,
        [currentValue]: 1
    }
}, {});




/*
 {
    dog: 2,
    chicken: 3,
    cat: 1,
    rabbit: 1
 }
 */

