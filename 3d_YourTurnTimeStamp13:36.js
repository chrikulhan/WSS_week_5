// Functions - your turn


// Write a function that has two parameters, a city and a state
// For example, 'Minneapolis' and 'MN'
// It should join the name of a city and state into one string, joined with a comma, in the form used in an address
// For example, 'Minneapolis, MN'
//
// Can you make sure the state is capitalized?
//     Example: convert 'mn' to 'MN'
// The function that converts a string to uppercase is called toUpperCase()

// function combinedCityState(City, State){
//     let combined = City + ', ' + State.toUpperCase()
//     //toUpperCase() = turn wi to WI
//     return combined
// }
//
// console.log(combinedCityState('Green Bay', 'wi'))
// // output:
// // Green Bay, WI
//
// //to store the output in a new variable:
// let combined = combinedCityState('Madison', 'wI')
// console.log(combined)
// //output:
// // Madison, WI

//There are template strings that can be used to fill in functions easier using backtiks``

function combinedCityState(City, State){
    let combined = `${City} , ${State.toUpperCase()}`
    //^^^this is a template string using backtiks at the beginning and end.
    //toUpperCase() = turn wi to WI
    return combined
}

console.log(combinedCityState('Green Bay', 'wi'))
// output:
// Green Bay , WI

//to store the output in a new variable:
let combined = combinedCityState('Madison', 'wI')
console.log(combined)
//output:
// Madison , WI

//from video 2b, initial code:

let todayTemp = 75

let tempC = (todayTemp - 32) * 5 / 9
    // console.log('Today\'s temperature is ' + tempC + 'C')
    //can change this to only show 2 decimal places in the output:
    console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')
//output: Today's temperature is 23.89C

    console.log(`Today's temperature is ${tempC.toFixed(2)}C`) //template string
//output:Today's temperature is 23.89C

//To include the fahrenheit temperature also in the template string:
    console.log(`Today's temperature is ${tempC.toFixed(2)}C which is equivalent to ${todayTemp}F.`)
//output: Today's temperature is 23.89C which is equivalent to 75F.


