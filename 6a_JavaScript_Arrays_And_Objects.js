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

let animalsagain = ['lion', 'tiger', 'cheetah']

console.log(animalsagain)
//output:[ 'lion', 'tiger', 'cheetah' ]
console.log(animalsagain[1])
//output:tiger
console.log(animalsagain[1000])
//output: undefined

animalsagain[6] = 'giraffe'
console.log(animalsagain)
//output: [ 'lion', 'tiger', 'cheetah', <3 empty items>, 'giraffe' ]
//so, because there are 3 empty elements, we just need to add element to fill in before adding
//the 6th element:
console.log(animalsagain[5])
//output: undefined
//this is an easy way to cause bugs in your program.
//You can read off the end of an array, or have an index that doesn't exist.

animalsagain[1] = 'zebra'
console.log(animalsagain[1])
//output:zebra

//A more controlled way to add elements to an array is to use
// Javascript method: push to add to an end of an array:
//and unshift to add to the start of an array:

//add to the end of an array:
animalsagain.push('elephant')
console.log(animalsagain)
//output: [ 'lion', 'zebra', 'cheetah', <3 empty items>, 'giraffe', 'elephant' ]

//add to the beginning of the array:
animalsagain.unshift('deer')
console.log(animalsagain)
//output: (printed differently and longer)
//[
//   'deer',
//   'lion',
//   'zebra',
//   'cheetah',
//   <3 empty items>,
//   'giraffe',
//   'elephant'
// ]

//remove from the beginning of the array:
// animal.shift(): if you want to remove whatever is at the beginning of the array
//even without knowing what that thing was just use animal.shift()

//**if you want to remove the thing from the beginning of the array AND know
// what that thing was, you can save it with let:
let firstAnimalsAgain = animalsagain.shift()
console.log(firstAnimalsAgain)
//output: deer

console.log(animalsagain) //will have one less item than before:
//output:[ 'lion', 'zebra', 'cheetah', <3 empty items>, 'giraffe', 'elephant' ]

// remove from the end of an array: POP\
// animalsagain.pop() //will remove the last thing from the array

//**if you want to know what the last thing was, save in a new variable:
let LastAnimalsAgain=animalsagain.pop()
console.log(LastAnimalsAgain)
//output:elephant

console.log(animalsagain) //elephant was removed:
//output:[ 'lion', 'zebra', 'cheetah', <3 empty items>, 'giraffe' ]

//push and pop are used more commonly that shift and unshift

//**reverse the order of the items in the array:
animalsagain.reverse()
console.log(animalsagain)
//output:[ 'giraffe', <3 empty items>, 'cheetah', 'zebra', 'lion' ]

//**if you have strings or numbers it will put them in numerical or alphabetical order:
animalsagain.sort()
console.log(animalsagain)
//output:[ 'cheetah', 'giraffe', 'lion', 'zebra', <3 empty items> ] //empty/undefined items at the end.

//**Figure out the length of your array:
animalsToRetry = ['lion', 'tiger', 'cheetah']
let LengthOfAnimalsToRetry =animalsToRetry.length
console.log(LengthOfAnimalsToRetry)
//output: 3 //meaning there are 3 things in the array

//**check to see if something is in an array:
console.log(animalsToRetry.indexOf('lion'))
//output: 0 //meaning it is in the first spot in the array

//**what if we try to look for something that is not in the array:
console.log(animalsToRetry.indexOf('walrus'))
//output: -1 //what is returned when something is not found.

//**could use the above lack of something in a condition:
if (animalsToRetry.indexOf('walrus') == -1) {
    console.log('walrus is not found in the array')
}
//output:walrus is not found in the array

//**is something in the array or not in the array: includes method: returns true or false
if (animalsToRetry.includes('cheetah')) {
    console.log('cheetah is in the array')
}
//output: cheetah is in the array

//**Join connects all the things in the array with a string

//--with no argument, it will join with a default character comma (,) and no space.
console.log(animalsToRetry.join())
//output:lion,tiger,cheetah

//--if I wanted to join them with a space and a star:
console.log(animalsToRetry.join(' * '))
//output:lion * tiger * cheetah

//--if you want to to loop over all of the animals
//--argument of the function has to be a variable and will represent
//one thing from the array at a time.
animalsToRetry.forEach(function(animal) {
    // console.log(animal)
    // })
//output:
// lion
// tiger
// cheetah

//to convert each animal to upperCase (for example) you can
//console.log the individual animal and give directions inside it:
    console.log(animal.toUpperCase())
    })
//output:
// LION
// TIGER
// CHEETAH

//Your TUrn: Can you use and loop and print the length of each
//animal name?
animalsToRetry.forEach(function(animal){
    console.log(animal.length)
})
//output:
// 4
// 5
// 7

/*Your Turn: Can you make a new array
Start with your array
    -take the length of each animal
    -make a new array that includes the length of each animal
*/
//this variable (animalLength) can be anything, but to track it, and use it in the future, be sure
//to use something logical:

//Didn't work:

// animalsToRetry.forEach(function(animal){
//     console.log(animal.length)
//     let animalsToRetryLength = animal.push.join()
// })

// let animalsToRetryLength = animalsToRetry.length.join ()
// console.log(animalsToRetryLength)

//****Solution:
// let animalsToRetryLength = []
// animalsToRetry.forEach(function(animal){
//     let length = animal.length
//     //need to add this to the original (animalsToRetryLength)
//     animalsToRetryLength.push(length)
// })
//
// console.log(animalsToRetryLength)
//output: [ 4, 5, 7 ]
// *******

//let's add a new animal to the above code to make sure everything works:

animalsToRetry.push('alabatross')

let animalsToRetryLength = []
animalsToRetry.forEach(function(animal){
    let length = animal.length
    //need to add this to the original (animalsToRetryLength)
    animalsToRetryLength.push(length)
})

console.log(animalsToRetryLength)
//output: [ 4, 5, 7, 10 ]
//YES IT WORKS!!


