const getCardColor = (aqi, forecast) => {
	if (aqi && forecast <= 50) {
		return "bg-success text-white";
	} else if (aqi && forecast <= 100) {
		return "bg-warning";
	} else if (aqi && forecast <= 150) {
		return "bg-orange ";
	} else if (aqi && forecast <= 200) {
		return "bg-danger text-white";
	} else if (aqi && forecast <= 300) {
		return "bg-very-unhealthy text-white";
	} else {
		return "bg-hazardous";
	}
};

const ForecastCard = ({ data }) => {
	const { aqi, city, forecast } = data;
	const cardColor = getCardColor(aqi);
	return (
		<div className={`card mb-4 ${cardColor}`}>
			<div className="card-body">
				<h5 className="card-title">{city.name}</h5>
				<h6 className="card-subtitle mb-2">Forecast {forecast.daily[0]}</h6>\
			</div>
		</div>
	);
};

export default ForecastCard;
