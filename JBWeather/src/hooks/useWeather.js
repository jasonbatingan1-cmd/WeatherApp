import { useState } from "react";
import { getWeatherByCity,getWeatherByCoords, getForecast, } from "../api/weather";
import { groupForecastByDay } from "../utils/groupForecast";

export function useWeather() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchByCoords = async (lat, lon) => {
        setLoading(true);

        const data = await getWeatherByCoords(lat, lon);
        setWeather(data);

        const f = await getForecast(lat, lon);
        const grouped = groupForecastByDay(f.list);
        setForecast(grouped);

        setLoading(false);
    };

    const fetchByCity = async (city) => {
        setLoading(true);

        const data = await getWeatherByCity(city);
        setWeather(data);

        const f = await getForecast(data.coord.lat, data.coord.lon);
        const grouped = groupForecastByDay(f.list);
        setForecast(grouped);

        setLoading(false);
    };

    const clear = () => {
        setWeather(null);
        setForecast(null);
    };


    return { weather, forecast, loading, fetchByCity, fetchByCoords, clear };
}
