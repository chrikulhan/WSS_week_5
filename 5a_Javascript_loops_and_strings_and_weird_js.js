//lets make an array of birds:
let birds = ['Owl','Robin', 'Eagle']

//can change the size of the list and behaves like a list type.
console.log(birds)
//output:[ 'Owl', 'Robin', 'Eagle' ]

//Let's look at looping with our array:
//looping= repeating once per item in the data-structure/array.

//Let's write a loop that prints each bird ,or console.log each bird:
// birds.forEach( function (){
// })
    //repeats once for each object in an array.
    //need to do one more thing with a function definition:
    //function will be called for each object in an array,
    //so the function needs to be passed that object (added below)

birds.forEach( function (bird){
    //can write code in here
    //what do you want to do for each item
//     console.log(bird) //this will print each bird, one on each line:
// })
// //output:
// //Owl
// // Robin
// // Eagle

//want to print each bird in upper case:
   console.log(bird.toUpperCase()) //this will print each bird, one on each line:
})
//output:
// OWL
// ROBIN
// EAGLE

//another way to write this: (need a loop counter)
//in the below example, x is going to count once for each time I want the loop to repeat.
//I want it to repeat once for every thing in the array:(x < birds.length)
//need to x how to count, usually increase by 1 (x = x + 1), could be written as x++
//x will count 0, 1, 2 for this array.
//remember arrays and list, etc. are numbered and the first number is always zero.

// for ( let x = 0; x < birds.length; x = x + 1){
//     let bird = birds[x]
//     //birds[0] = Owl
//     //birds[1] = Robin
//     //birds[2] = Eagle
//     console.log(bird)
// }
//output:
// Owl
// Robin
// Eagle

//make it into upper case:
for ( let x = 0; x < birds.length; x = x + 1){
    let bird = birds[x]
    //birds[0] = Owl
    //birds[1] = Robin
    //birds[2] = Eagle
    console.log(bird.toUpperCase())
}
//output:
// OWL
// ROBIN
// EAGLE


//this foreach loop is more concise, you will see it more often.
birds.forEach( function(bird){
    console.log(bird.toUpperCase())
})

//how to do a loop counter in the forEach *that prints in the output*:
birds.forEach( function(bird, index){
    console.log(index, bird.toUpperCase())
})
//output: (same as loop counter below, but less obvious):
// 0 OWL
// 1 ROBIN
// 2 EAGLE

//traditional counting for loop:
for (let x = 0 ; x < birds.length ; x++) {
    let bird = birds[x]
    console.log(bird.toUpperCase())
}
//output:
//OWL
// ROBIN
// EAGLE

//using this version^^ (Traditional) means you have access to x so, you can do a loop counter, so
//you know where you are:
for (let x = 0 ; x < birds.length ; x++) {
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}
//output:
// 0 OWL
// 1 ROBIN
// 2 EAGLE

//Loops in Javascript:

//loop over an array by counting the elements
//This approach is useful if you need to know where you are in an array
// for (let i = 0; i < letters.length; i++) {
//     console.log('Element ' + i + ' is ' + letters(i))
// }
//
// /*another way of looping over an array:
// More concise if you don't need to know the position of the elements
// Notice the function definition in the function call!*/
//
// let animals = ['Buffalo', 'Elephant', 'Yak']
//
// animals.forEach(function (element){
//     console.log(element)
// })

//While loops (pretty UNcommon in javascript)
// same concept as Python, note the () around the condition and {} for the loop body.
/*A while loop to double a number and display it
Stop when a number greater than 100 is reached*/

let maxVal = 100
let number = 1
while (number < maxVal) {
    number *=2
    console.log('number = ' + number)
}

// Strings: Various library functions
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

let text = 'hello world'

let stringLength = text.length //length is a property
let shout = text.toUpperCase() //These are methods -convert to uppercase
let whisper = text.toLowerCase() //and to lowercase
let whereIsW = text.indexOf('w') //Index of first matching character or -1 if not found
let whereIsZ = text.indexOf('z') //index of first matching character or -1 if not founds
let whisperAndShout = whisper.concat(shout) //join strings together
let replace0 = text.replace('o', '0')
//^^^replace the first instance of first thing with second thing.
//See reference for more info on this, can also do global
//and more complex replacements with regular expressions.

//another example of replace, if you want to replace lower case itec with uppercase ITEC
let altText = 'The classes are itec 1150, itec 1250, itec 2560'
let replaced = altText.replace('itec', 'ITEC')
console.log(replaced)
//output:The classes are ITEC 1150, itec 1250, itec 2560 **only replaced the first instance. (doesn't replace all itec
// with ITEC after the first instance)

//actual solution to changing itec to ITEC globally: (/itec/g) is a pattern the program looks for.
let replacedAll = altText.replace(/itec/g, 'ITEC') // "g" means global
console.log(replacedAll)
//output: The classes are ITEC 1150, ITEC 1250, ITEC 2560

let replaceAll0 = text.replace(/o/g, '0')//replace the all instance of first thing with second thing
let removeWhitespace = text.trim() //Remove spaces, tabs, newlines, etc., from both ends of the string.
console.log(stringLength, shout,      whisper,    whereIsW, whereIsZ, whisperAndShout,       replace0,   replaceAll0, removeWhitespace)
//output:   11            HELLO WORLD hello world 6         -1        hello worldHELLO WORLD hell0 world hell0 w0rld  hello world

let message = 'The classes are 1150, 1250, 2560'
//replace every 4 digit number (ex. 1150) in the above string and replace it with
// ITEC and a 4 digit number
// /d{4}/g is interpreted as: (match (/) each digit (d) that is repeated 4
//times {4}/g
let replaceRegex = message.replace(/d{4}/g, 'ITEC $&')
console.log(replaceRegex)
//output: The classes are 1150, 1250, 2560
//MORE INFO here if needed. : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

//Weird javscript:
//https://github.com/denysdovhan/wtfjs **jokes**

//Could maybe use debugger in devtools?