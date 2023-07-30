import React, { useState } from "react";

/** const CitySearch = ({ getAirQuality, forecastData }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	// replaces spaces with hyphens in order to read
	const handleSearch = (event) => {
		event.preventDefault();
		const formattedCity = inputValue.replace(/ /g, "-");
		getAirQuality(formattedCity);
	};

	return (
		<form onSubmit={handleSearch} className="mb-4">
			<input
				type="text"
				placeholder="Search city here..."
				onChange={handleInputChange}
				className="form-control"
			></input>
			<button type="submit" className="btn btn-primary mt-3">
				Search
			</button>
			{forecastData && (
				<div className="mt-4">
					<h5>Forecast Data:</h5>
					<p>Property 1: {forecastData.daily.pm25}</p>
				</div>
			)}
		</form>
	);
};*/

const CitySearch = ({ onSearch }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const formattedCity = inputValue.replace(/ /g, "-");

		onSearch(formattedCity);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search city here..."
				onChange={handleInputChange}
				className="form-control"
			></input>

			<button type="submit" className="btn btn-primary mt-3">
				Search
			</button>
		</form>
	);
};

export default CitySearch;
