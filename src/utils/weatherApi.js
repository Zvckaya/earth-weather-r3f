const getCurrentWeather = (lat, lon, key) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

const getCityWeather = (city, key) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data)
        return {
          city: city,
          weatherData: data,
        };
    })
    .catch((error) => console.error(error));
};

export { getCurrentWeather, getCityWeather };
