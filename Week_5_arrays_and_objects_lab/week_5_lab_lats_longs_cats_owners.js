/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

// TODONE Extract the latitude value, and log it to the console.

let issPosition = iss_location.iss_position
console.log(issPosition)

let latitudeExtracted = issPosition.latitude
console.log(latitudeExtracted)
// 49.2167

//All in one:
let latitudeShortVersion = iss_location.iss_position.latitude
console.log(latitudeShortVersion)
//49.2167

// TODONE Extract the longitude value, and log it to the console.

let longitudeShortVersion = iss_location.iss_position.longitude
console.log(longitudeShortVersion)
//100.5363


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */

let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODONE write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
console.log(rates)
//{ AUD: 1.5417, BGN: 1.9558, BRL: 3.8959, CAD: 1.5194 }

rates.CHF = 1.1787
console.log(rates)
//{ AUD: 1.5417, BGN: 1.9558, BRL: 3.8959, CAD: 1.5194, CHF: 1.1787 }

// TODONE if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)

let newAUD = rates.AUD*100
console.log('Exchanging 100 Euros for Australian dollars will give you A$' + newAUD.toFixed(2) + '.' )
//Exchanging 100 Euros for Australian dollars will give you A$154.17.

// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.

only_rates = []

for (let countryCode in rates){
    // console.log(countryCode, rates[countryCode])
//AUD 1.5417
// BGN 1.9558
// BRL 3.8959
// CAD 1.5194
// CHF 1.1787
//     console.log(countryCode)
// AUD
// BGN
// BRL
// CAD
// CHF
//     console.log(rates[countryCode])
// 1.5417
// 1.9558
// 3.8959
// 1.5194
// 1.1787

let only_rates = rates[countryCode].push //wrong
    console.log(only_rates)
    // only_rates.push
    // console.log(only_rates)

//     wrong:
//     console.log(rates[countryCode].join)
//    wrong:
//     findMaxRate = rates[countryCode].join.sort()
//     console.log(findMaxRate)
}

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODONE print Gary Oldman's cat's name

// console.log(cats_and_owners[1])
//{ name: 'Gary Oldman', cat: 'Soymilk' }

let GaryOldmansCat = cats_and_owners[1].cat
console.log(GaryOldmansCat)
//Soymilk


// TODONE Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.

cats_and_owners[4] = {name: 'Taylor Swift', cat: 'Meredith'}
console.log(cats_and_owners)
// console.log(cats_and_owners[4].cat) //test //Meredith
//[
//   { name: 'Bill Clinton', cat: 'Socks' },
//   { name: 'Gary Oldman', cat: 'Soymilk' },
//   { name: 'Katy Perry', cat: 'Kitty Purry' },
//   { name: 'Snoop Dogg', cat: 'Miles Davis' },
//   { name: 'Taylor Swift', cat: 'Meredith' }
// ]

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"


//wrong
// for (let c in cats_and_owners){
//     console.log(c);
//     console.log(cats_and_owners[c])
// }
//output:
// 0
// { name: 'Bill Clinton', cat: 'Socks' }
// 1
// { name: 'Gary Oldman', cat: 'Soymilk' }
// 2
// { name: 'Katy Perry', cat: 'Kitty Purry' }
// 3
// { name: 'Snoop Dogg', cat: 'Miles Davis' }
// 4
// { name: 'Taylor Swift', cat: 'Meredith' }
// for (let cat_and_owners[name] in cats_and_owners){
//     console.log(`${name}'s cat is named `) //${cat}.
// }
//output:
// 0 { name: 'Bill Clinton', cat: 'Socks' }
// 1 { name: 'Gary Oldman', cat: 'Soymilk' }
// 2 { name: 'Katy Perry', cat: 'Kitty Purry' }
// 3 { name: 'Snoop Dogg', cat: 'Miles Davis' }
// 4 { name: 'Taylor Swift', cat: 'Meredith' }

// cats_and_owners.forEach(function(name,cat){
//     console.log(`${name}'s cat is named ${cat}`)
// })
// cats_and_owners.forEach(function(){
//     console.log(`${cats_and_owners.name}'s cat is named ${cats_and_owners.cat}`)
// })
// console.log(cats_and_owners.name)
