import React, { useState } from "react";

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
