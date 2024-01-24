const apiKey = "a09d83b79a343ca4c3d733aca0d90835";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button');
        const weatherIcon = document.querySelector('.weather-icon');

        async function checkWeather(city)
        {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            //if unput city name is not valid
            if(response.status === 404)
            {
                document.querySelector('.error').style.display = 'block';
                document.querySelector('.weather').style.display = 'none';
            }
            else
            {
                var data = await response.json();
                document.querySelector('.city').innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
                document.querySelector('.wind').innerHTML = data.wind.speed +"Kmph";

                //this is will match with the weather and display images a/c to it
                weatherIcon.src = "image/" + data.weather[0].main.toLowerCase() + ".png";

                document.querySelector('.weather').style.display = 'block';
                document.querySelector('.error').style.display = 'none';
            }
        }
        //on click event of button
        searchBtn.addEventListener('click', ()=>{
            checkWeather(searchBox.value);
        });