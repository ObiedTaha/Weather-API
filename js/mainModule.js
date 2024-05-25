import { WeatherComponend } from "./weatherComponend.js";
import { SystemController } from "./systemController.js";

let system = new SystemController
let weather = new WeatherComponend

export async function codeDigram() {
    await system.getApi();
    let current = weather.setCurrentWeather(system.currentWeather());
    let forcast = weather.setForcastWeather(system.forcastWeather());
    document.getElementById('weatherContent').innerHTML = (current + forcast);

}

codeDigram();