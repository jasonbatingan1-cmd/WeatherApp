# JBWeather
## 🌦️ Summary
JBWeather is a weather forecasting application that allows users to look up the current and upcoming weather conditions for cities around the world. The app integrates with the OpenWeatherMap third‑party API to fetch real‑time weather data, including a 7‑day forecast for any selected location.

The project is built using Node.js on the backend and React + Vite on the frontend, providing a fast, modern, and responsive user experience.

## 🚀 Features
- Search for weather by city name

- View current weather conditions (temperature, humidity, wind, etc.)

- Display a full 7‑day forecast

- Clean, responsive UI built with React + Vite

- Backend proxy server (Node.js) to securely handle API requests

- Error handling for invalid cities, network issues, or missing data

## 🛠️ Tech Stack
| Layer | Technology |
| --- | --- |
| Frontend | React, Vite |
| Backend |	Node.js |
| API |	OpenWeatherMap (One Call API or Forecast API) |

## 🔌 How It Works
1. The user enters a city name in the search bar.

2. The frontend sends the request to your Node.js backend.

3. The backend calls the OpenWeatherMap API using your API key.

4. Weather data is returned to the frontend and displayed in a clean UI.

5. This architecture keeps your API key secure and avoids exposing it in the browser.

## 📦 Installation & Setup

### Clone the repository
```
git clone https://github.com/jasonbatingan1-cmd/WeatherApp
```

### Install backend dependencies
```
cd server
npm install
```

### Install frontend dependencies
```
cd ../client
npm install
```

## ▶️ Running the App
### Backend
```
cd server
npm run dev
```
### Frontend
```
cd client
npm run dev
```

## 🔑 Environment Variables
Create a .env file in your backend directory:
```
OPENWEATHER_API_KEY=your_api_key_here
PORT=3001
```

## 📸 Screenshots (optional)
Add UI screenshots here once your app is built.

🧩 Future Enhancements
Add geolocation support (auto‑detect user’s location)

Add hourly forecast

Add weather icons and animations

Save favorite cities

Dark mode

<i>JBWeather created by Jason Batingan, 2026</i>
