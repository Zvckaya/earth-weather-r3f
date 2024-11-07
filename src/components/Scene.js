// components/Scene.js

import { Light } from "./Lights";
import { Earth } from "./Earth";
import { Weather } from "./Weather";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { getCityWeather } from "../utils/weatherApi";
import { cities } from "../utils/cities";

const API = process.env.REACT_APP_API_KEY;

export default function Scene() {
  const [content, setContent] = useState([]);

  const getCitiesWeather = () => {
    const promises = cities.map((city) => getCityWeather(city, API));

    Promise.all(promises)
      .then((weatherDataArray) => setContent(weatherDataArray))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCitiesWeather();
  }, []);

  return (
    <>
      <color attach="background" args={["rgb(67,127,240) 100%"]} />
      <Light />
      <OrbitControls />
      <Earth position={[0, -2, 0]} />
      {content.map((cityWeather, idx) => (
        <Weather
          key={cityWeather.city}
          weather={cityWeather.weatherData.weather[0].main.toLowerCase()}
          position={[-1 + idx * 0.5, 0, 0]}
        />
      ))}
    </>
  );
}
