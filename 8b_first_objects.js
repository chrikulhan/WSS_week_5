//create an object - contains properties
//properties are name: value pairs

let user = { username: 'Chris', password: 'banana'}

console.log(user.username)
//output: Chris
console.log(user['username'])
//output: Chris

console.log(user.password)
// output: banana
console.log(user['password'])
// output: banana

//use terminal to access the same info:
//type: node 8b_first_objects.js and hit enter
//the two console.log items will return:
//output:
//Chris
//Chris

/*if the name of the property is something you know,
but it's in a variable,
you have to use a square bracket notation: */

let whatProperty = 'password'
console.log(user[whatProperty]) //can use a variable name in the square brackets
//output: banana

/* Objects and JSON
    -Define object variables and data with JSON syntax
        -Pronounced "jason"
    -JavaScript Object Notation
    -Dictionary-like structure
    -{ name : value , name2 : value2 }
    -names need to be strings
    -Values can be anything – strings, numbers, arrays, other objects –
    so can have nested structure
*/
//***MODIFYING OBJECTS***

//We can change data in an object:
user.password = 'elephant'
console.log (user)
//output: { username: 'Chris', password: 'elephant' }

user['password'] = 'alligator'
console.log(user)
//output: { username: 'Chris', password: 'alligator' }

//Can add new properties to objects:
user.email = 'chrisk@greatmail.com'
console.log(user)
//output:
//{
// username: 'Chris',
// password: 'alligator',
// email: 'chrisk@greatmail.com'
//}

console.log(user.email)
// output: chrisk@greatmail.com




