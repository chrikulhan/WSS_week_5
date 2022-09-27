//video 3 timestamp 7:28

//Let's check to see if a Minnesota zip code belongs to a Minnesota address:
function isMinnesotaZip(code)   {
    //55001-56763 (this is the valid range of MN zip codes)
    //and in JavaScript is &&
    if (code >= 55001 && code <=56763) {
        return true
    } else {
        return false
    }
}

// console.log(isMinnesotaZip(55403))
//output:
// ptFunction.js
// true

//Also works if you call with a string (in single quotes):
// console.log(isMinnesotaZip('55403'))
// console.log(isMinnesotaZip('55001'))
// console.log(isMinnesotaZip('56763'))
// console.log(isMinnesotaZip('9999999'))
// console.log(isMinnesotaZip('-1'))

//output:
// ptFunction.js
// true
// true
// true
// false
// false

//So when get data in string format, you don't have to do extra step
//of converting to a number from a string.

//works with numbers (not strings) as well:

console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(55001))
console.log(isMinnesotaZip(56763))
console.log(isMinnesotaZip(9999999))
console.log(isMinnesotaZip(-1))

//output:ptFunction.js
// true
// true
// true
// false
// false