//Get weather descriptions out of the array:

//found the JSON, clicked on "raw data" and "pretty print" to get the nice JSON data:
//from here: https://git.io/JU3l6

let weather = {                     //object
    "message": "accurate",
    "cod": "200",
    "count": 1,
    "list": [               //list property, has an array as a value (everything)
        {
            "id": 2643743,
            "name": "London",
            "coord": {
                "lat": 51.5085,
                "lon": -0.1258
            },
            "main": {
                "temp": 7,                              // current temperature
                "pressure": 1012,
                "humidity": 81,
                "temp_min": 5,
                "temp_max": 8
            },
            "dt": 1485791400,
            "wind": {
                "speed": 4.6,   //I want this info - wind speed
                "deg": 90
            },
            "sys": {
                "country": "GB"
            },
            "rain": null,
            "snow": null,
            "clouds": {
                "all": 90
            },
            "weather": [            //array
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",  //I want this description
                    "icon": "50d"
                },
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle", //I also want this description
                    "icon": "09d"
                }
            ]
        }
    ]
}

let weatherList = weather.list
// console.log(weatherList)
/*output:
[
  {
    id: 2643743,
    name: 'London',
    coord: { lat: 51.5085, lon: -0.1258 },
    main: { temp: 7, pressure: 1012, humidity: 81, temp_min: 5, temp_max: 8 },
    dt: 1485791400,
    wind: { speed: 4.6, deg: 90 },
    sys: { country: 'GB' },
    rain: null,
    snow: null,
    clouds: { all: 90 },
    weather: [ [Object], [Object] ]
  }
]
 */
let weatherInfo = weatherList[0]
// console.log(weatherInfo)
/*{
    id: 2643743,
        name: 'London',
        coord: { lat: 51.5085, lon: -0.1258 },
    main: { temp: 7, pressure: 1012, humidity: 81, temp_min: 5, temp_max: 8 },
    dt: 1485791400,
        wind: { speed: 4.6, deg: 90 },
    sys: { country: 'GB' },
    rain: null,
        snow: null,
        clouds: { all: 90 },
    weather: [
        { id: 701, main: 'Mist', description: 'mist', icon: '50d' },
        {
            id: 300,
            main: 'Drizzle',
            description: 'light intensity drizzle',
            icon: '09d'
        }
    ]
}
*/

let weatherDescriptionArray = weatherInfo.weather //this is an array
// console.log(weatherDescriptionArray)
/*[
  { id: 701, main: 'Mist', description: 'mist', icon: '50d' },
  {
    id: 300,
    main: 'Drizzle',
    description: 'light intensity drizzle',
    icon: '09d'
  }
]
*/

//There are multiple things within this array(weatherInfo.weather), so we need
//to use a for each loop:

//video 8, timestamp ~24mins
weatherDescriptionArray.forEach(function(weatherDescription){
//     console.log(weatherDescription)
// })
/*output:
{ id: 701, main: 'Mist', description: 'mist', icon: '50d' }
{
  id: 300,
  main: 'Drizzle',
  description: 'light intensity drizzle',
  icon: '09d'
}

*/
console.log(weatherDescription.description)
})
/*output:
mist
light intensity drizzle

 */

//brand new array, and instead of console.logging everything,
//push the info to a new array:
let descriptions = []

weatherDescriptionArray.forEach(function(weatherDescription){
    // console.log(weatherDescription.description) instead of console.logging this, push it
//    into the new array "descriptions" (just above^^^)
    descriptions.push(weatherDescription.description)
})
//rename the descriptions into a string, and use join to make them into a string:
let descriptionsString = descriptions.join(', ')
//console.log to see the descriptionsString:
console.log('The weather is ' + descriptionsString)
//output: The weather is mist, light intensity drizzle

//Another challenge: can you read the pressure or the humidity??
