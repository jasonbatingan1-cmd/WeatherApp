export function groupForecastByDay(list) {
    const days = {};

    list.forEach((item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });

        if (!days[date]) {
            days[date] = {
                date,
                temps: [],
                icons: [],
                descriptions: [],
            };
        }

        days[date].temps.push(item.main.temp);
        days[date].icons.push(item.weather[0].icon);
        days[date].descriptions.push(item.weather[0].description);
    });

    return Object.values(days).map((day) => ({
        date: day.date,
        min: Math.min(...day.temps),
        max: Math.max(...day.temps),
        icon: mostCommon(day.icons),
        description: mostCommon(day.descriptions),
    }));
}

function mostCommon(arr) {
    return arr.sort(
        (a, b) =>
            arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    ).pop();
}
