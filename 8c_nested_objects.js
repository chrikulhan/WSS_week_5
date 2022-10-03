/* Nested Objects
    -Values can be other objects, or arrays
    -Arrays can be composed of objects
    -These objects and arrays can contain nested
    objects and arrays
*/
//curly brackets = objects
//square brackets == array/list

//Creat an object. Values can be strings, numbers, lists, other objects
let user = {
    username: 'Zoe',
    password: 'kittens',
    userid: 1,
    roles: ['user', 'admin'], //roles values is an array
    contact: {
        phone: '123-456-7890',
        office: 'T.1400'
    }
}
user.userid = 101 //change userid
console.log(user)
//output:
// {
//   username: 'Zoe',
//   password: 'kittens',
//   userid: 101,
//   roles: [ 'user', 'admin' ],
//   contact: { phone: '123-456-7890', office: 'T.1400' }
// }

console.log('User roles are: ', user.roles) //Print roles array
//output: User roles are:  [ 'user', 'admin' ]

console.log('User roles are: ', user['roles']) //Print roles array, other syntax
//output: User roles are:  [ 'user', 'admin' ]

console.log('User\'s first role is ' + user.roles[0]) //First role in an array (user.roles)
//User's first role is user

//**All of the user roles:
console.log('All the user roles are: ')
//output:All the user roles are:

user.roles.forEach(function(role){
    console.log(role)
})
//output:
// user
// admin

//***How to access nested object properties:
user.contact.office = 'M.1234' //change office
console.log('New office is ' + user.contact.office)
//output:
//New office is M.1234

//***How to read nested values
console.log('User phone number is ' + user.contact.phone)
//output:
// User phone number is 123-456-7890

//**Add another attribute - even though it is not defines in
user.email = 'zoe@minneapolis.edu'
console.log(user.email)
//output: zoe@minneapolis.edu
