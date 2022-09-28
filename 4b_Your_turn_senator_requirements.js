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
    // the value false
    // the number zero,
    // empty lists
    // empty objects

//examples of weird things that happen in javascript with falsy values:
if ('' == 0) {
    console.log('the same')
    } else {
    console.log('not the same')
}
//output: the same

if (false == 0) {
    console.log('the same')
} else {
    console.log('not the same')
}
//output: the same

if (undefined == 0) {
    console.log('the same')
} else {
    console.log('not the same')
}
//output: not the same

//empty list:
if ([] == 0) {
    console.log('the same')
} else {
    console.log('not the same')
}
//output: the same

//empty object:
if ({} == 0) {
    console.log('the same')
} else {
    console.log('not the same')
}
//output: not the same


//to fix the above same/not the same issues, use === (best practice):
if ('' === 0) {
    console.log('the same')
} else {
    console.log('not the same')
}
//output: not the same

if (false === 0) {
    console.log('the same')
} else {
    console.log('not the same')
}
//output: not the same

if (undefined === 0) {
    console.log('the same')
} else {
    console.log('not the same')
}
//output: not the same

//empty list:
if ([] === 0) {
    console.log('the same')
} else {
    console.log('not the same')
}
//output: not the same

//empty object:
if ({} === 0) {
    console.log('the same')
} else {
    console.log('not the same')
}
//output: not the same

//use === unless you know you want "type coercion" to happen
// type coercion = wanting to compare a string value from a form
//against a number.