// displays color for aqi levels

const getCardColor = (aqi) => {
	if (aqi <= 50) {
		return "bg-success text-white";
	} else if (aqi <= 100) {
		return "bg-warning";
	} else if (aqi <= 150) {
		return "bg-orange ";
	} else if (aqi <= 200) {
		return "bg-danger text-white";
	} else if (aqi <= 300) {
		return "bg-very-unhealthy text-white";
	} else {
		return "bg-hazardous";
	}
};

// forecast card displays the date, max/min, pm25(only)
const ForecastCard = ({ data }) => {
	// destructuring data
	const { city, forecast } = data;
	// displays aqi level color
	const cardColor = getCardColor(data.aqi);

	function ForecastDay({ data }) {
		return <div>{data.date}</div>;
	}

	return (
		<div className={`card mb-4 ${cardColor}`}>
			<div className="card-body">
				<h5 className="card-title">{city.name} 7-Day Forecast</h5>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th scope="col">Date</th>
							<th scope="col">MAX & MIN</th>
							<th scope="col">PM25</th>
						</tr>
					</thead>
					<tbody>
						{/* maps through forecast object, pulling out data */}
						{forecast.daily.pm25.map((pm25) => (
							<tr key={pm25.day}>
								<td>
									<ForecastDay data={pm25} />
									{pm25.day}
								</td>
								<td>
									Max: {pm25.max}, Min: {pm25.min}
								</td>
								<td>{pm25.avg}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ForecastCard;
