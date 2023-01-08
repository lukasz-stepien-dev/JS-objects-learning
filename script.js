// Objects in Depth 
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

// Functions at Runtime 
// First-Class Functions
// Exercise 1
const higherOrderFunction = () => {
    return function () {
        return 8;
    }
}

// Exercise 2
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
    name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(el => {
    return `${el.name} by ${el.artist} sold ${el.sales} copies`;
});

console.log(albumSalesStrings);

// Exercise 3
const results = musicData.filter(el => {
    return el.name.length >= 10 && el.name.length <= 25;
});

console.log(results);