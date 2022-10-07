//Try to get the wind speed out of this data both
//long way and short way:

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

//1. get the property array out first:
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

 *///the above array has length 0
//2. let's get the first list item from this array:
let weatherInfo = weatherList[0]
console.log(weatherInfo)
/*output: {
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

//3. Next get the wind speed:
let main = weatherInfo.wind
console.log(main)
/*output: { speed: 4.6, deg: 90 }
 */

let currentWindSpeed = main.speed
console.log(currentWindSpeed)
//output: 4.6

//IN one line:
let windSpeed = weather.list[0].wind.speed
console.log(windSpeed)
//output: 4.6

