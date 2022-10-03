/* JavaScript Objects

    -JavaScript is very relaxed about objects
    -Can create an object on the fly, no class definition needed
    -Use { } to define an object
    -List properties, which are name:value pairs
    -Separate names and values with :
 */

//create an object -contains properties
//properties are name: value pairs
//name is "user", two properties: one for a username and one for a password.

/*An object can have
    -fields, store things
    -methods, example: function, or other objects or arrays
        -can be created directly with no class definition.
*/

let user = { username: 'Zoe', password: 'kittens'}

//how do you read data from an object: (2 ways)
//console.log (objectName.propertyName)
console.log(user.username)
//output: Zoe

//console.log(objectName['propertyName']) propertyName must be a string.
console.log(user['username'])
//output: Zoe




