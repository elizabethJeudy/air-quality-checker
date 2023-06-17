const AirQualityLevels = () => {
	const levels = [
		{
			range: "0 - 50",
			level: "Good",
			implications:
				"Air quality is considered satisfactory, and air pollution poses little or no risk",
		},
		{
			range: "51 - 100",
			level: "Moderate",
			implications:
				"Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
		},
		{
			range: "101 - 150",
			level: "Unhealthy for Sensitive Groups",
			implications:
				"Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
		},
		{
			range: "151 - 200",
			level: "Unhealthy",
			implications:
				"Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects",
		},
		{
			range: "201 - 300",
			level: "Very Unhealthy",
			implications:
				"Health warnings of emergency conditions. The entire population is more likely to be affected.",
		},
		{
			range: "301 and higher",
			level: "Hazardous",
			implications:
				"Health alert: everyone may experience more serious health effects",
		},
	];

	const getLevelColor = (level) => {
		switch (level) {
			case "Good":
				return "#009966";
			case "Moderate":
				return "#FFDE33";
			case "Unhealthy for Sensitive Groups":
				return "#FF9933";
			case "Unhealthy":
				return "#CC0133";
			case "Very Unhealthy":
				return "#660099";
			case "Hazardous":
				return "#7E0122";
			default:
				return "black";
		}
	};

	return (
		<div className="card mb-4">
			<div className="card-body">
				<h5 className="card-title">Air Quality Levels</h5>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th scope="col">AQI Range</th>
							<th scope="col">Level of Health Concern</th>
							<th scope="col">Health Implications</th>
						</tr>
					</thead>
					<tbody>
						{levels.map(({ range, level, implications }, index) => (
							<tr key={index}>
								<td>{range}</td>
								<td style={{ color: getLevelColor(level), fontWeight: "bold" }}>
									{level}
								</td>
								<td>{implications}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AirQualityLevels;
