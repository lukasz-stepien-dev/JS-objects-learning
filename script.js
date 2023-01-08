// Introduction
// Exercise 1
const menu = {
    name: 'Salted Caramel Ice Cream',
    price: 2.95,
    ingredients: ['butter', 'ice cream', 'salt', 'sugar']
};

// Create and Modify Properties
// Exercise 1
let house = {
    color: 'green',
    numRooms: 4,
    numWindows: 8,
    forSale: false
};

delete house.numWindows;

// Exercsise 2
house.hasGarage = true;

// Invoking Object Methods
// Ecercise 1
const myArray = [ function alerter() { alert('Hello!'); } ];
myArray[0]();

// Exercise 2 
bell.ring()

// Exercise 3
tree.growOneFoot();

// Exercise 4
const chameleon = {
    color: 'green',
    changeColor: () => {
        if (chameleon.color === 'green')
            chameleon.color = 'pink'
        else 
            chemeleon.color = 'green'
    }
}

// Extracting Properties and Values
// Exercise 1
const triangle = {
    type: 'polygon',
    sides: 3,
    sumOfAngles: 180,
    equilateral: true,
    equiangular: true
};
Object.keys(triangle);