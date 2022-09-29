/*Arrays are a list and kept in order
Objects are a "mapping type",
    -examples:
        *dictionary
        *hashmap with keys and values that are associated with each other.
JavaScript Arrays:
    -Use [] to define an array
    -Length is not fixed, can add and delete elements
    -Use array[index] to access and modify elements
*/

let animals = ['duck', 'bear', 'squirrel']

console.log(animals)
//output: [ 'duck', 'bear', 'squirrel' ]
console.log(animals[0])
//output: duck

//Modifying Elements
//modify index:

//Access elements by index:
console.log(animals[0])
let first_animal = animals[0]
console.log(first_animal)
//output: first_animal = 'duck'

//Modify elements by index:
animals[2] = 'mouse'
console.log(animals)
//replaces squirrel from above with 'mouse'
//output:[ 'duck', 'bear', 'mouse' ]

/*Creating your own Arrays
    -More like lists in Python, can change size of array
    -Define with square brackets [ ]
    -Can store the same type, or mix of types
    -Read and write individual elements with [] notation

 */

//Array variable (like a list in python)
//more common to keep the same type of data together.

// let quiz_scores = [100, 78, 93, 81, 100, 99]
// console.log(quiz_scores)
//
// //Another array. Can mix types if needed
// let my_array = [5, 6, 'cake', 1234.124, text]
// //text is not defined is erroring out.
//
// //Print whole array
// console.log(my_array)

//Read individual elements
// console.log(my_array[0])
// console.log(my_array[2])
// console.log(my_array[-10])
// console.log(my_array[10])

//Can modify elements by index

//examples from video 6 timestamp 3:30

let animals2 = ['lion', 'tiger', 'cheetah']

console.log(animals2)
//output:[ 'lion', 'tiger', 'cheetah' ]
console.log(animals2[1])
//output:tiger
console.log(animals2[1000])
//output: undefined

animals[6] = 'giraffe'
console.log(animals2)
//output: [ 'lion', 'tiger', 'cheetah' ]

//stopped at timestamp 4:16


