import { AnimalList } from "./AnimalList.jsx";
import { SeasonClock } from "./SeasonClock.jsx";
import { CountDown } from "./CountDown.jsx";
import { MouseMonitor } from "./MouseMonitor.jsx";

const { useState, useEffect } = React;

const animalInfos = [
	{
		type: "Malayan Tiger",
		count: 787,
	},
	{
		type: "Mountain Gorilla",
		count: 212,
	},
	{
		type: "Fin Whale",
		count: 28,
	},
];

export function Home() {
	return (
		<section className="home">
			<MouseMonitor />
			{/* <CountDown stratFrom={10} Done={() => console.log("Done!")} /> */}
			{/* <SeasonClock /> */}
			{/* <AnimalList animals={animalInfos} /> */}
		</section>
	);
}
