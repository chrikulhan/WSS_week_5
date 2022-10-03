//****Nested Objects

/*Create a user object for your information in your dream job:
    -name
    -email
    -password
    -contact (an object with office and telephone)
    -roles (an array)
    -In code, add a property for your salary, as a number
    -In code, add "server admin" to your roles
    -Add the office location, e.g. (location: "Minneapolis") to the contact object
*/

let user = {
    username: 'Chris Kulhanek',
    email: 'chris.kulhan@softwareforgood.org',
    password: 'mango',
    contact: {
        phone: '123-456-7890',
        office: '219 Hennepin Ave S',
    },
    roles: ['user', 'admin'],
}

console.log(user)
//output:
// {
//     username: 'Chris Kulhanek',
//         email: 'chris.kulhan@softwareforgood.org',
//     password: 'mango',
//     contact: { phone: '123-456-7890', office: '219 Hennepin Ave S' },
//     roles: [ 'user', 'admin']
// }

user.salary = 80000
console.log(user.salary)
//output: 80000

user.roles.push = 'server admin' //this isn't quite right.
console.log(user.roles)

user.contact.location = "Minneapolis"
console.log(user.contact)

// stopped video 8, timestamp: 10:49