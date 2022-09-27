// Functions--your turn
// Write a function that takes a GPA value as a parameter
// Return true if the GPA is between 0 and 4
// Return false otherwise
//
// Call your function to check it works
// If you call your function with -3 or 4.1 it should return false
// If you call your function with 2.5 or 4 it should return true

// function isGPA(GPA) {
//     ///valid between 0 and 4
//     if (GPA >= 0 && GPA <= 4) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isGPA (0))
// console.log(isGPA (-1))
// console.log(isGPA (5))
// console.log(isGPA (4))
// console.log(isGPA (2.5))

//output:
// true
// false
// false
// true
// true

//Could write this out as well, same as above,
// though less clear about what is going on:
function isGPA(GPA) {
    return GPA >= 0 && GPA <= 4
}

console.log(isGPA(-1))
