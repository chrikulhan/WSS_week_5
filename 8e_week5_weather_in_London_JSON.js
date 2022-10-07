
/*JSON
    -Is used in many contexts outside JavaScript
    -Many websites (and other systems) "speak" JSON to other systems;
        as part of their API
    -For example, an Android or iOS may request information from a website,
        and receive JSON data in return; the JSON will then be processed in
        Java/Kotlin or Swift

-a program can request information from a web server and it can receive JSON in response.
-for example, requesting a weather forecast: (openweathermap.org) for london:
https://samples.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02, part of response

This is the data from the above .org site about the current weather in London:
-want to know:
    -temperature
    -wind speed
    -description of the weather:

*/
//found the JSON, clicked on "raw data" and "pretty print" to get the nice JSON data:
//from here: https://git.io/JU3l6

let weather = {         //object
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
            "temp": 7,                // current temperature
            "pressure": 1012,
            "humidity": 81,
            "temp_min": 5,
            "temp_max": 8
        },
        "dt": 1485791400,
        "wind": {
            "speed": 4.6,                   //I want this info - wind speed
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
                "description": "mist",                  //I want this description
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

//First get the list property array out first:
let weatherList = weather.list
console.log(weatherList)
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

//the above array has length 0
//let's get the first list item from this array:
let weatherInfo = weatherList[0] //weather info is an object.
console.log(weatherInfo)
/* output:
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
/*Next: We want the current temperature: If I look in the above output,
 it looks like the temp is located in the main property. */

let main = weatherInfo.main
console.log(main)
/*output:
{ temp: 7, pressure: 1012, humidity: 81, temp_min: 5, temp_max: 8 }
*/

/* The data I want is in the above output: (temp : 7)
so make a new variable and get the data:
 */

let currentTemp = main.temp
// console.log(currentTemp)
//output: 7

//to have it print a sentence:
console.log('The current temperature is ' + currentTemp + ' degrees Celcius.')
//output:
// The current temperature is 7 degrees Celcius.

//This could be written as one line:

let temp = weather.list[0].main.temp
console.log(temp)
//output: 7





