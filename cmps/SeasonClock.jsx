const { useState, useEffect, useRef } = React;

export function SeasonClock() {
	const [isDark, setIsDark] = useState(true);
	const [time, setTime] = useState({
		hours: "00",
		minutes: "00",
		seconds: "00",
	});

	const intervalIdRef = useRef();

	const nowDate = new Date(Date.now());
	// const nowDate = new Date("October 21, 1983 01:15:00");

	useEffect(() => {
		intervalIdRef.current = setInterval(() => {
			setClock();
		}, 1000);
		return () => clearInterval(intervalIdRef.current);
	}, []);

	function getMonthAndSeason(date) {
		const months = [
			{ month: "January", season: "Winter" },
			{ month: "February", season: "Winter" },
			{ month: "March", season: "Spring" },
			{ month: "April", season: "Spring" },
			{ month: "May", season: "Spring" },
			{ month: "June", season: "Summer" },
			{ month: "July", season: "Summer" },
			{ month: "August", season: "Summer" },
			{ month: "September", season: "Autumn" },
			{ month: "October", season: "Autumn" },
			{ month: "November", season: "Autumn" },
			{ month: "December", season: "Winter" },
		];

		return months[date.getMonth()];
	}

	function getDayOfTheWeek(date) {
		const weekday = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		return weekday[date.getDay()];
	}

	const { month, season } = getMonthAndSeason(nowDate);

	const classDark = isDark ? "-dark" : "";

	function setClock() {
		const hours = nowDate.getHours().toString().padStart(2, "0");
		const minutes = nowDate.getMinutes().toString().padStart(2, "0");
		const seconds = nowDate.getSeconds().toString().padStart(2, "0");
		setTime({ hours, minutes, seconds });
	}

	return (
		<section className="season-clock" onClick={() => setIsDark(!isDark)}>
			<div className={`container ${season.toLowerCase()}${classDark}`}>
				<h2>{`${month} (${season})`}</h2>
				<div className="season-image">
					<img src={`../assets/season-image/${season.toLowerCase()}.png`} alt="" />
				</div>
				<h4>{getDayOfTheWeek(nowDate)}</h4>
				<div className="clock">{`${time.hours}:${time.minutes}:${time.seconds}`}</div>
			</div>
		</section>
	);
}
