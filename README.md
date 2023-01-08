# JS-objects-learning

## Coolors used in this project
- #FF8811
- #F4D06F
- #FFF8F0
- #9DD9D2
- #392F5A

## A font used in this project
[Open Sans](https://fonts.google.com/specimen/Open+Sans)

# 📚 Objects in Depth 

## 📑 Introduction

### ⭐️ Ex. 1

Create an object called `menu` that represents the following menu item:

Salted Caramel Ice Cream
2.95
butter, ice cream, salt, sugar

The object should contain the following properties:
- name
- price
- ingredients

## 📑 Create and Modify Properties

### ⭐️ Ex. 1

Write an expression to delete the `numWindows` property from `house`.

### ⭐️ Ex. 2

Write an expression to add a new `hasGarage` property to `house`. Set the value of the `hasGarage` property to `true`.

## 📑 Invoking Object Methods

### ⭐️ Ex. 1

Write an expression that invokes the `alerter()` function in the following array, `myArray`.

### ⭐️ Ex. 2

Write an expression that invokes the function referenced by the `bell` object's `ring` property.

### ⭐️ Ex. 3

Write an expression that invokes the function referenced by the `tree` object's `growOneFoot` property

### ⭐️ Ex. 4

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

## 📑 Extracting Properties and Values

### ⭐️ Ex. 1

Write an expression using `Object.keys()` to extract the keys (i.e., property names) from the `triangle` object

# 📚 Functions at Runtime 

## 📑 First-Class Functions

### ⭐️ Ex. 1 

Declare a function named `higherOrderFunction` that takes no arguments,
and returns an anonymous function.

The returned function itself takes no arguments as well, and simply
returns the number 8.

## 📑 Callbacks

### ⭐️ Ex. 2

Using the musicData array and map():
- Return a string for each item in the array in the following format: 
    <album-name> by <artist> sold <sales> copies
- Store the returned data in a new albumSalesStrings variable

Note:
- Do not delete the musicData variable
- Do not alter any of the musicData content
- Do not format the sales number; leave it as a long string of digits

### ⭐️ Ex. 3
Using the musicData array and filter():
- Return only album objects where the album's name is  10 characters long, 25 characters long, or anywhere in between
- Store the returned data in a new `results` variable

Note:
- Do not delete the musicData variable
- Do not alter any of the musicData content