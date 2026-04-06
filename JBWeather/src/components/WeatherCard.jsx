import { Card, Typography } from "@mui/material";

export default function WeatherCard({ weather }) {
    if (!weather) return null;

    return (
        <Card sx={{ p: 2, mt: 2 }}>
            <Typography variant="h5">{weather.name}</Typography>

            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="icon"
            />

            <Typography>{weather.weather[0].description}</Typography>
            <Typography>Temperature: {weather.main.temp}°F</Typography>
            <Typography>Humidity: {weather.main.humidity}%</Typography>
            <Typography>Wind: {weather.wind.speed} mph</Typography>
        </Card>
    );
}
