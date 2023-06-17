import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import CitySearch from "./components/CitySearch";
import AirQualityCard from "./components/AirQualityCard";
import PollutantInfo from "./components/PollutantInfo";
import AirQualityLevels from "./components/AirQualityLevels.js";
import "./App.css";

function App() {
	const [airQualityData, setAirQualityData] = useState(null);
	const [error, setError] = useState(null);
	// takes in city user inputs by waiting for input
	// try and catch attempts to grab data, if not will return error
	const getAirQuality = async (city) => {
		try {
			const response = await fetch(
				`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`
			);
			const data = await response.json();
			if (response.ok && data.status === "ok") {
				setAirQualityData(data.data);
				setError(null);
			} else {
				setError(
					"Sorry, we couldn't find the city you were looking for. Check your spelling or try another location nearby."
				);
			}
		} catch (error) {
			console.error("network error:", error);
			setError("Sorry something went wrong");
			// set error state
			// set data to null
		}
	};
	return (
		<div className="container">
			<h1 className="mt-5 mb-3">Air Quality Index Checker</h1>
			<CitySearch getAirQuality={getAirQuality} />
			{/** if error value exists, show div containing error info */}
			{error && (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			)}
			{airQualityData && (
				// air quality card component
				// pollutant info
				<>
					<AirQualityCard data={airQualityData} />
					<PollutantInfo pollutant={airQualityData.dominentpol} />
				</>
			)}
			<AirQualityLevels />
		</div>
	);
}

export default App;
