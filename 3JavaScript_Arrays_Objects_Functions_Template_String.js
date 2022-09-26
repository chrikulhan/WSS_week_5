//Review: creating function and calling function:

function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('Hello World'))
//output: HELLO WORLD!!!

//can save the output of the function in a variable:
let message = shout('hello web programmers')
console.log(message)
//output:HELLO WEB PROGRAMMERS!!!

//convert fahrenheit to celcius value:
function f_to_c(f) {
    let celsius = (f - 32) * 5 / 9
    // return celsius
    // return celsius.toFixed()
    //will round to the nearest celsius without decimals
    //output: 24
    //OR provide number of decimal places:
    return celsius.toFixed(2)
    //will return number of fractional digits.
    //output:23.89
}

let todayTemp = 75
todayCelsius = f_to_c(todayTemp)
console.log(todayCelsius)
//output: 23.88888888888889

//if you want it to be tidy: change 'return celsius' to
//return.celsius.toFixed() (changed above)

//when JavaScript runs code, it reads the file first, records
//the function definitions, and then it starts executing the code.

//in javascript you DON'T need to define functions before you use them.

//stunted out at video 3, timestamp 4:10