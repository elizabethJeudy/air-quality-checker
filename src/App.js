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
	const [forecastData, setForecastData] = useState(null);
	const [error, setError] = useState(null);
	const [forecastError, setForecastError] = useState(null);

	const getAirQuality = async (city) => {
		try {
			const response = await fetch(
				`https://api.waqi.info/feed/${city}/?token=320e8013e0ad0959bfc91c3bd38052b5989f3f72`
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

	const getAirQualityForecast = async (city) => {
		try {
			const response = await fetch(
				`https://api.waqi.info/feed/${city}/?token=320e8013e0ad0959bfc91c3bd38052b5989f3f72`
			);
			const data = await response.json();
			if (response.ok && data.status === "ok") {
				setForecastData(data.forecast.daily);
				setForecastData(null);
			} else {
				setForecastError("Couldn't retrieve data");
				setForecastError(null);
			}
		} catch (error) {
			console.error("network error:", error);
			setForecastError("Sorry, something went wrong");
			setForecastData(null);
		}
	};

	return (
		<div className="container">
			<h1 className="mt-5 mb-3">Air Quality Index Checker</h1>
			<CitySearch
				getAirQuality={getAirQuality}
				getAirQualityForecast={getAirQualityForecast}
			/>
			{error && (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			)}
			{forecastError && (
				<div className="alert alert-danger" role="alert">
					{forecastError}
				</div>
			)}
			{airQualityData && (
				<>
					<AirQualityCard data={airQualityData} />
					<PollutantInfo pollutant={airQualityData.dominentpol} />
				</>
			)}
			{forecastData && (
				<>
					<ForecastCard forecast={forecastData} />
				</>
			)}

			<AirQualityLevels />
		</div>
	);
}

/**
 * 
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
			console.log(data);
			if (response.ok && data.status === "ok") {
				setAirQualityData(data.data);
				setError(null);
			} else {
				setError(
					"Sorry, we couldn't find the city you were looking for. Check your spelling or try another location nearby."
				);
				setAirQualityData(null);
			}
		} catch (error) {
			console.error("network error:", error);
			setError("Sorry something went wrong");
			setAirQualityData(null);
			// set error state
			// set data to null
		}
	};
	return (
		<div className="container">
			<h1 className="mt-5 mb-3">Air Quality Index Checker</h1>
			<CitySearch getAirQuality={getAirQuality} />
			{/** if error value exists, show div containing error info 
		
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
		*/

export default App;
