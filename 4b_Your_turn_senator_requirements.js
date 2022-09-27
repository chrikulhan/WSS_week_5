//timestamp 3:56
//Your turn! To be a senator, there are 3 requirements:
// You must at least 30 years old
//You must have to have been a US citizen for 9 or more years
//You must live in the state you want to represent.

let age = 30
let usCitizenTime = 9
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Wisconsin'

if(age >=30 && usCitizenTime >=9 && stateOfResidence === stateWantToRepresent) {
    //double equals sign vs. triple equals sometimes matter, sometimes doesn't.

    console.log('You can apply to become a senator!')
} else {
    console.log('You are not allowed to be a senator in that state.')
}

//falsy values -undefined values that are considered false include (or falsy):
    //undefined,
    // null,
    // the number zero,
    // empty lists
    // empty objects
    // false

//example: stopped at timestamp 9:15, video 4