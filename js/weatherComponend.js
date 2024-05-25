export class WeatherComponend {

    setCurrentWeather(data = {}) {
        let container =
            `
            <div class="col-md-4 compo">
                <div class="card-header py-2 border-0 ">
                    <span class="day">${data.day}</span>
                    <span class="date float-end">${data.currentDate}</span>
                <div class="clear-fix"></div>
                    </div>
                    <div class="card-body  py-4">
                        <div class="city temp">${data.city}</div>
                        <div class="mainTemp text-white">${data.temp} <sup>O</sup> C </div>
                        <div class="weatherIcon"><img src='${data.icon}'/></div>
                        <div class="custom py-2">${data.text}</div>
                        <span class="me-1 "> <img src="images/icon-umberella.png" alt="icon-umberella">
                        20%</span>
                        <span class="me-1 "> <img src="images/icon-wind.png" alt="icon-wind">
                        ${data.windSpeed}km/h</span>
                        <span class="me-1 "> <img src="images/icon-compass.png" alt="icon-compass">
                        ${data.windDirection}</span>
                    </div>
            </div>
        `;

        return container;
    }

    setForcastWeather(dataArr = []) {
        let container = '';
        dataArr.forEach((data, index) => {
            let dark = ''
            if (index == 0) {
                dark = 'dark'
            }
            container +=
                `
            <div class="col-md-4 text-center ${dark} compo">
                <div class="card-header border-0  py-2 ">
                     <span class="day">${data.day}</span>
                </div>
                <div class="card-body  py-4">
                    <div class="weatherIcon"><img src='${data.icon}'/></div>
                    <div class="temp text-white">${data.maxTemp} <sup>O</sup> C </div>
                    <div class="">${data.minTemp} <sup>O</sup> C </div>
                    <div class="custom py-4">${data.text}</div>
                 </div>
            </div>
        `
        });
        return container;
    }
}
