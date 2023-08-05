import React, { useState } from "react";
import CitySearch from "./components/CitySearch";
import AirQualityCard from "./components/AirQualityCard";
import PollutantInfo from "./components/PollutantInfo";
import AirQualityLevels from "./components/AirQualityLevels.js";
import ForecastCard from "./components/ForecastCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	const [airQualityData, setAirQualityData] = useState(null);
	const [forecastAirData, setForecastAirData] = useState(null);
	const [error, setError] = useState(null);
	const [forecastError, setForecastError] = useState(null);

	// retrieves current quality for searched city
	const getAirQuality = async (city) => {
		try {
			const response = await fetch(
				`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`
			);
			const data = await response.json();
			console.log(data);
			if (response.ok && data.status === "ok") {
				setAirQualityData(data.data);
				setError(null);
			} else {
				setError(
					"Sorry, we couldn't find the city you were looking for. Try another location nearby or ensure your spelling is correct."
				);
				setAirQualityData(null);
			}
		} catch (error) {
			console.error("network error:", error);
			setError("Sorry, something went wrong");
			setAirQualityData(null);
		}
	};

	// gets 7 day forecast
	const getForecastData = async (city) => {
		try {
			const response = await fetch(
				`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`
			);
			const data = await response.json();
			if (response.ok && data.status === "ok") {
				setForecastAirData(data.data);
				setForecastError(null);
			} else {
				setForecastError(
					"Sorry, we couldn't find the city you were looking for. Try another location nearby or ensure your spelling is correct."
				);
				setForecastAirData(null);
			}
		} catch (error) {
			console.error("network error:", error);
			setForecastError("Sorry, something went wrong");
			setForecastAirData(null);
		}
	};

	const handleSearch = (city) => {
		getAirQuality(city);
		getForecastData(city);
	};

	return (
		<div className="container">
			<h1 className="mt-5 mb-3">Air Quality Index Checker</h1>
			<CitySearch onSearch={handleSearch} /> <br />
			{error && (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			)}
			{airQualityData && (
				<div className="card-container">
					<AirQualityCard data={airQualityData} />
					<PollutantInfo pollutant={airQualityData.dominentpol} />
				</div>
			)}
			{forecastAirData && (
				<>
					<ForecastCard data={forecastAirData} />
				</>
			)}
			{forecastError && (
				<div className="alert alert-danger" role="alert">
					{forecastError}
				</div>
			)}
			<AirQualityLevels />
			<footer>
				<p>
					Open Sourced by:{" "}
					<a
						href="https://github.com/elizabethJeudy/air-quality-checker"
						target="_blank"
						rel="noreferrer"
					>
						<strong>Elizabeth Jeudy</strong>
					</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
