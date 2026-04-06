import { useState } from "react";
import { searchCities } from "../api/weather";

export default function SearchBar({ onSelectCity }) {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 2) {
            const results = await searchCities(value);
            setSuggestions(results);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelect = (city) => {
        onSelectCity(city);
        setQuery(city.name);
        setSuggestions([]);
    };

    return (
        <div style={{ position: "relative" }}>
            <input
                value={query}
                onChange={handleChange}
                placeholder="Search city..."
                style={{ padding: "0.5rem", width: "100%" }}
            />

            {suggestions.length > 0 && (
                <ul
                    style={{
                        position: "absolute",
                        top: "2.5rem",
                        left: 0,
                        right: 0,
                        background: "white",
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        border: "1px solid #ccc",
                        zIndex: 10,
                    }}
                >
                    {suggestions.map((s, i) => (
                        <li
                            key={i}
                            onClick={() => handleSelect(s)}
                            style={{
                                padding: "0.5rem",
                                cursor: "pointer",
                            }}
                        >
                            {s.name}, {s.state}, {s.country}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
