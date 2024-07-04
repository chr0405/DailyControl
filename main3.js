document.addEventListener("DOMContentLoaded", function() {
    const WeatherNow_btn = document.querySelectorAll('.WeatherNow_btn');
    let selectedButton = null; // 선택된 버튼을 저장할 변수

    WeatherNow_btn.forEach(button => {
        button.addEventListener('click', () => {
            // 만약 같은 버튼을 다시 클릭하면 초기화
            if (selectedButton === button) {
                selectedButton.classList.remove('WeatherNow_btn2');
                selectedButton = null;
                clearWeatherInfo();
                return; // 함수 종료
            }

            // 선택된 버튼의 스타일을 관리하여 변경
            if (selectedButton) {
                selectedButton.classList.remove('WeatherNow_btn2');
            }
            button.classList.add('WeatherNow_btn2');
            selectedButton = button; // 현재 선택된 버튼으로 설정

            const cityName = button.id;
            searchWeather(cityName)
                .then(weatherData => {
                    displayWeatherInfo(weatherData);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        });
    });

    // 날씨 정보 초기화 함수
    function clearWeatherInfo() {
        const WeatherNow_number = document.getElementById("WeatherNow_number");
        const WeatherNow_unit = document.getElementById("WeatherNow_unit");
        const WeatherNow_text = document.getElementById("WeatherNow_text");

        WeatherNow_number.innerHTML = "";
        WeatherNow_unit.innerHTML = "";
        WeatherNow_text.innerHTML = "";
    }
});

function searchWeather(cityName) {
    const API_KEY = 'cc4ff4549b8d77af0bdb2b3b0a85cd79';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    return axios.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw new Error('Error fetching weather data:', error);
        });
}

function displayWeatherInfo(weatherData) {
    let temperature = Math.round(((weatherData.main.temp - 273.15) * 10) / 10);

    const WeatherNow_number = document.getElementById("WeatherNow_number");
    const WeatherNow_unit = document.getElementById("WeatherNow_unit");
    const WeatherNow_text = document.getElementById("WeatherNow_text");

    WeatherNow_number.innerHTML = `${temperature}`;
    WeatherNow_unit.innerHTML = "℃";

    let Weather_text = weatherData.weather[0].main;
    switch (Weather_text) {
        case 'Clear':
            WeatherNow_text.innerHTML = "맑음 🌞";
            break;
        case 'Clouds':
            WeatherNow_text.innerHTML = "흐림 🌥️";
            break;
        case 'Rain':
            WeatherNow_text.innerHTML = "비 🌧️";
            break;
        case 'Drizzle':
            WeatherNow_text.innerHTML = "이슬비 🌦️";
            break;
        case 'Thunderstorm':
            WeatherNow_text.innerHTML = "천둥 번개 ⛈️";
            break;
        case 'Snow':
            WeatherNow_text.innerHTML = "눈 ⛄";
            break;
        case 'Mist':
            WeatherNow_text.innerHTML = "안개 😶‍🌫️";
            break;
        case 'Smoke':
            WeatherNow_text.innerHTML = "연기 🌫️";
            break;
        case 'Haze':
            WeatherNow_text.innerHTML = "연무 🌫️";
            break;
        case 'Dust':
            WeatherNow_text.innerHTML = "먼지 🌫️";
            break;
        case 'Fog':
            WeatherNow_text.innerHTML = "안개 🌫️";
            break;
        case 'Sand':
            WeatherNow_text.innerHTML = "모래 ⌛";
            break;
        case 'Ash':
            WeatherNow_text.innerHTML = "화산재 🌋";
            break;
        case 'Squall':
            WeatherNow_text.innerHTML = "돌풍 🌬️";
            break;
        case 'Tornado':
            WeatherNow_text.innerHTML = "토네이도 🌪️";
            break;
    }
}