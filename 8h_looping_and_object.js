
/*Looping and objects
    -Loop over all the property names of an object using a for …. in loop
    -As you loop over property names, you can access each property's
    value using square bracket syntax
*/

//an object with properties table, chair, couch: values are color of each:
// let furniture = {table : 'red', chair: 'blue', couch: 'green'};
//
// //looping over all of the properties
// for (let f in furniture){
//     console.log(f); //f is table, chair, couch - property names
//     console.log(furniture(f)); //this is the value for property f
// }

// another example
let user = {
    username: 'chris',
    password : 'banana'
}

for (let name in user) { //name would be each property name in turn
    console.log(name, user[name])
}
// output:
//username chris
//password banana

console.log(user.username)
//output:chris

console.log(user['username'])
//output: chris
