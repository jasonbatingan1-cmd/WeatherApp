import { useContext } from "react";
import { IconButton, Container, Typography, Button } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import { useWeather } from "./hooks/useWeather";
import { ColorModeContext } from "./theme/ThemeWrapper";

export default function App() {
  const { weather, forecast, loading, fetchByCity, fetchByCoords, clear } = useWeather();
  const colorMode = useContext(ColorModeContext);

  const handleCitySelect = (cityObj) => {
    console.log("Selected city:", cityObj);
    fetchByCoords(cityObj.lat, cityObj.lon);
  };

  const handleUseLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      fetchByCoords(pos.coords.latitude, pos.coords.longitude);
    });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <IconButton onClick={colorMode.toggleColorMode}>
        <Brightness4 />
      </IconButton>

      <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
        JBWeather
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}>
        Type in a city name or use your location to get the current weather and 5-day forecast.
      </Typography>

      <SearchBar onSelectCity={handleCitySelect} />

      <Button 
        onClick={handleUseLocation} 
        variant="contained" 
        color="primary"
        sx={{ mt: 2 }}
      >
        Use My Location
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        onClick={clear}
        sx={{ mt: 2 }}
      >
        Clear
      </Button>

      {loading && <p>Loading...</p>}

      <WeatherCard weather={weather} />
      <ForecastList forecast={forecast} />
    </Container>
  );
}
