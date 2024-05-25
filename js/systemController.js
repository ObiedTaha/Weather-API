import { codeDigram } from "./mainModule.js";
export class SystemController {

    constructor() {
        this.days = ["Sunday", "Monday", "Tuseday", "Wensday", "Thursday", "Friday", "Saturday"]
        this.Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",]
        this.allData;
        this.forcast;
        this.city = 'cairo';
        this.search();
    }

    async getApi(city = this.city) {
        try {
            let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=ba97125a4c2f4f9199611110211509&q=${city}&days=3`)
            let data = await response.json()
            this.forcast = data['forecast']['forecastday']
            this.allData = data;
        } catch (error) {
            console.clear();
        }

    }

    currentWeather() {
        let time = this.handalTime(this.forcast[0]['date']);
        let current = {
            "city": this.allData['location'].name,
            "currentDate": time.currentDate,
            'day': time.day,
            'temp': this.allData['current'].temp_c,
            'icon': this.allData['current']['condition'].icon,
            'text': this.allData['current']['condition'].text,
            'windSpeed': this.allData['current'].wind_kph,
            'windDirection': this.allData['current'].wind_dir
        }
        return current;
    }

    forcastWeather() {
        let nextDay = []
        for (let i = 1; i < 3; i++) {
            let forcast = this.forcast[i];
            let time = this.handalTime(forcast['date']);
            let forcastDay = {
                'day': time.day,
                'icon': forcast['day']['condition']['icon'],
                'maxTemp': forcast['day']['maxtemp_c'],
                'minTemp': forcast['day']['mintemp_c'],
                'text': forcast['day']['condition']['text'],
            }
            nextDay.push(forcastDay);
        }
        return nextDay
    }

    handalTime(time) {
        let date = new Date(time);
        let day = this.days[date.getDay()];
        let currentDate = date.getDate() + this.Months[date.getMonth()]
        return { 'day': day, 'currentDate': currentDate }
    }

    search() {
        let searchField = document.getElementById("search");
        let searchBtn = document.getElementsByClassName("searchBtn");
        searchField.addEventListener("keyup", (e) => {
            let value = e.target.value;
            this.city = value
            codeDigram();
        })
    }

}

