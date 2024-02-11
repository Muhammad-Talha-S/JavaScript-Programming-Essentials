// Arrow Function
const add = (a, b) => a + b;
console.log(add(4, 4))

// Arrays
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(`Orignal Array Fruits = ${fruits}`)

// PUSH adds elements at LAST and Returns Length
length = fruits.push('Orange', 'Kiwi')
console.log(`Length of Fruit ${length}, Array Fruits = ${fruits}`)

// POP removes LAST element from array and Returns it
removed_fruit = fruits.pop()
console.log(`Removed Fruit ${removed_fruit}, Array Fruits = ${fruits}`)

// SHIFT removes FIRST element from array and Returns it
removed_fruit = fruits.shift()
console.log(`Removed Fruit ${removed_fruit}, Array Fruits = ${fruits}`)

// UNSHIFT adds elements at START and Returns Length
length = fruits.unshift('Cherry', 'Watermelon')
console.log(`Length of Fruit ${length}, Array Fruits = ${fruits}`)

/* SPLICE Method
    - Changes Context of Array
    - Removes, Replaces, Adds Elements
*/

const fruit_list = ['Apple', 'Banana', 'Cherry']
fruit_list.splice(1, 1, 'Grape')
console.log(`List Fruits = ${fruit_list}`)

// concat method combine 2 Arrays and returns combined array without changing the orignal arrays
// splice method returns the shallow copy of orginal array .splice(1, 3) *3 is not included.
// indexOf method returns the index of first occurence. -1 if element does not exist.
// reverse method. Inplace
// For Loop

for (let i = 0; i < fruit_list.length; i++) {
    console.log(fruit_list[i]);
    
}

/* Common Use Cases
    - Store item list
    - Iterate through data
    - Implement Stacks and Queues
    - Manageable data in Table
*/