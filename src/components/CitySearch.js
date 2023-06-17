import React, { useState } from "react";

const CitySearch = ({ getAirQuality }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	// replaces spaces with hyphens
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
				className="form-control inverse"
			></input>
			<button type="submit" className="btn btn-primary mt-3">
				Search
			</button>
		</form>
	);
};

export default CitySearch;
