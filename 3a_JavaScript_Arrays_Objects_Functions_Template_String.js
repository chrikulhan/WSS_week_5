//Review: creating function and calling function:

function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('Hello World'))
//output: HELLO WORLD!!!

//If you call a function with an extra argument:
console.log(shout('Hello World', 'hello'))
//output: (will ignore the second argument):HELLO WORLD!!!

//If you call a function without the expected text:
// console.log(shout())
// console.log(text)
//output: "TypeError: Cannot read properties of undefined (reading 'toUpperCase')
//     at shout " (undefined or null)

//The above (adding extra variables and having blank things that should
//be filled in makes it easier to have optional parameters.
//because things will still be called, but may not behave
//exactly as expected.

//can save the output of the function in a variable:
let message = shout('hello web programmers')
console.log(message)
//output:HELLO WEB PROGRAMMERS!!!

//convert fahrenheit to celcius value:
// function f_to_c(f) {
//     let celsius = (f - 32) * 5 / 9
//     // return celsius
//     // return celsius.toFixed()
//     //will round to the nearest celsius without decimals
//     //output: 24
//     //OR provide number of decimal places:
//     return celsius.toFixed(2)
//     //will return number of fractional digits.
//     //output:23.89
// }

// let todayTemp = 75
// todayCelsius = f_to_c(todayTemp)
// console.log(todayCelsius)
//output: 23.88888888888889

//if you want it to be tidy: change 'return celsius' to
//return.celsius.toFixed() (changed above)

//when JavaScript runs code, it reads the file first, records
//the function definitions, and then it starts executing the code.

//in javascript you DON'T need to define functions before you use them.

//convert fahrenheit to celcius value, add a variable called decimalPlaces:
function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    // return celsius
    // return celsius.toFixed()
    //will round to the nearest celsius without decimals
    //output: 24
    //OR provide number of decimal places:
    if(decimalPlaces) {
        return celsius.toFixed(decimalPlaces)
    } else {
        return celsius
    }

}

// let todayTemp = 75
// //the reason for this vvv output is because the decimalPlaces variable doesn't have a
// //value.

//Undefined variables (decimalPlaces ^^^) are considered to be false.
//could be written as: if(decimalPlaces == undefined), but do NOT need to write that.
// todayCelsius = f_to_c(todayTemp)
// console.log(todayCelsius)
// //output:23.88888888888889

//if you now give the decimalPlaces a value (4):
let todayTemp = 75
//the reason for this vvv output is because the decimalPlaces thing doesn't have a
//value.
todayCelsius = f_to_c(todayTemp, 4)
console.log(todayCelsius)
//output: 23.8889 (with 4 decimal places)