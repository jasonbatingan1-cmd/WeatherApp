import { Card, Grid, Typography } from "@mui/material";

export default function ForecastList({ forecast }) {
    if (!forecast) return null;

    return (
        <div style={{ marginTop: "1rem" }}>
            <Typography variant="h6">5-Day Forecast</Typography>

            <Grid container spacing={2} sx={{ mt: 1 }}>
                {forecast.map((day, i) => (
                    <Grid item xs={6} sm={4} md={3} key={i}>
                        <Card sx={{ p: 2, textAlign: "center" }}>
                            <Typography>{day.date}</Typography>

                            <img
                                src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                                alt="icon"
                            />

                            <Typography>High: {Math.round(day.max)}°F</Typography>
                            <Typography>Low: {Math.round(day.min)}°F</Typography>
                            <Typography>{day.description}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
