/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
(used levelup.gitconnected.com to help me)
 */

let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}

// TODO print the full name of the Literature Nobel laureate.
// console.log(`${nobel_prize_winners_2017.prizes[2].laureates[0].firstname} ${nobel_prize_winners_2017.prizes[2].laureates[0].surname}` )
// //wrong (Jeffrey C. Hall)
console.log(nobel_prize_winners_2017)
//{
//   prizes: [
//     { year: '2017', category: 'physics', laureates: [Array] },
//     { year: '2017', category: 'chemistry', laureates: [Array] },
//     { year: '2017', category: 'medicine', laureates: [Array] },
//     { year: '2017', category: 'literature', laureates: [Array] },
//     { year: '2017', category: 'peace', laureates: [Array] },
//     { year: '2017', category: 'economics', laureates: [Array] }
//   ]
// }
console.log('breakbreakbreak')

let prizeTypes = nobel_prize_winners_2017.prizes
console.log(prizeTypes)
//[
//   {
//     year: '2017',
//     category: 'physics',
//     laureates: [ [Object], [Object], [Object] ]
//   },
//   {
//     year: '2017',
//     category: 'chemistry',
//     laureates: [ [Object], [Object], [Object] ]
//   },
//   {
//     year: '2017',
//     category: 'medicine',
//     laureates: [ [Object], [Object], [Object] ]
//   },
//   { year: '2017', category: 'literature', laureates: [ [Object] ] },
//   { year: '2017', category: 'peace', laureates: [ [Object] ] },
//   { year: '2017', category: 'economics', laureates: [ [Object] ] }
// ]
console.log('breakbreakbreak')

let prize_literature = prizeTypes[3]
console.log(prize_literature)
//{
//   year: '2017',
//   category: 'literature',
//   laureates: [
//     {
//       id: '947',
//       firstname: 'Kazuo',
//       surname: 'Ishiguro',
//       motivation: '"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world"',
//       share: '1'
//     }
//   ]
// }
console.log('wwwbreakbreakbreak')

let idCharactersOfLaureate = prize_literature.laureates
console.log(idCharactersOfLaureate)
//[
//   {
//     id: '947',
//     firstname: 'Kazuo',
//     surname: 'Ishiguro',
//     motivation: '"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world"',
//     share: '1'
//   }
// ]
console.log('breakbreakbreak')

let firstName = idCharactersOfLaureate[0].firstname
console.log(firstName)
//Kazuo
console.log('breakbreakbreak')

let lastName = idCharactersOfLaureate[0].surname
console.log(lastName)
// Ishiguro
console.log('breakbreakbreak')

AfterEveryThingFirstName = nobel_prize_winners_2017.prizes[3].laureates[0].firstname
console.log(AfterEveryThingFirstName)
//Kazuo
console.log('breakbreakbreak')

AfterEveryThingSurName = nobel_prize_winners_2017.prizes[3].laureates[0].surname
console.log(AfterEveryThingSurName)
//Ishiguro
console.log('breakbreakbreak')

console.log(`Final answer, the 2017 literature Nobel prize went to: ${AfterEveryThingFirstName} ${AfterEveryThingSurName}.`)
console.log('breakbreakbreak')

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification
//  if a laureate was added, or removed.
idCharactersOfPhysicsLaureates = nobel_prize_winners_2017.prizes[0].laureates
console.log(idCharactersOfPhysicsLaureates)
//[
//   {
//     id: '941',
//     firstname: 'Rainer',
//     surname: 'Weiss',
//     motivation: '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
//     share: '2'
//   },
//   {
//     id: '942',
//     firstname: 'Barry C.',
//     surname: 'Barish',
//     motivation: '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
//     share: '4'
//   },
//   {
//     id: '943',
//     firstname: 'Kip S.',
//     surname: 'Thorne',
//     motivation: '"for decisive contributions to the LIGO detector and the observation of gravitational waves"',
//     share: '4'
//   }
// ]
console.log('breakbreakbreak')

for (let IDnumber in idCharactersOfPhysicsLaureates){
    console.log(idCharactersOfPhysicsLaureates[IDnumber].id)
}
// 941
// 942
// 943
console.log('breakbreakbreak')

// TODO write code to print the names of all of the prize categories (So your output would start physics,
//  chemistry, medicine... ).
console.log(nobel_prize_winners_2017)
//{
//   prizes: [
//     { year: '2017', category: 'physics', laureates: [Array] },
//     { year: '2017', category: 'chemistry', laureates: [Array] },
//     { year: '2017', category: 'medicine', laureates: [Array] },
//     { year: '2017', category: 'literature', laureates: [Array] },
//     { year: '2017', category: 'peace', laureates: [Array] },
//     { year: '2017', category: 'economics', laureates: [Array] }
//   ]
// }
console.log('breakbreakbreak')
let prizeGroups = nobel_prize_winners_2017.prizes
console.log(prizeGroups)
//[
//   {
//     year: '2017',
//     category: 'physics',
//     laureates: [ [Object], [Object], [Object] ]
//   },
//   {
//     year: '2017',
//     category: 'chemistry',
//     laureates: [ [Object], [Object], [Object] ]
//   },
//   {
//     year: '2017',
//     category: 'medicine',
//     laureates: [ [Object], [Object], [Object] ]
//   },
//   { year: '2017', category: 'literature', laureates: [ [Object] ] },
//   { year: '2017', category: 'peace', laureates: [ [Object] ] },
//   { year: '2017', category: 'economics', laureates: [ [Object] ] }
// ]
console.log('breakbreakbreak')

for (let group in prizeGroups){
    console.log(prizeGroups[group].category)
}
//physics
// chemistry
// medicine
// literature
// peace
// economics
console.log('breakbreakbreak')

// TODO write code to print the total number of prize categories

for (let group in prizeGroups){
    numberOfCategories = (prizeGroups[group].category)
    console.log(numberOfCategories)
}
//wrong: but they are listed?
//physics
// chemistry
// medicine
// literature
// peace
// economics

//wrong:::How to put items into an array and then measure the length of that array?
// let length = numberOfCategories.length
// console.log(length)


// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

//Moving on. I don't currently know how to put things into an array or how to count them once I have them,
//so I would be wasting my time. I'll come back.