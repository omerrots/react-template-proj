const { useState, useEffect, useRef } = React;

export function CountDown({ stratFrom, Done }) {
	const [count, setCount] = useState(stratFrom);
	const intervalIdRef = useRef();

	useEffect(() => {
		intervalIdRef.current = setInterval(() => {
			setCount(count => count - 1);
		}, 1000);
		return () => clearInterval(intervalIdRef.current);
	}, []);

	useEffect(() => {
		if (count === 0) {
			stopcount();
			Done();
		}
	}, [count]);

	function stopcount() {
		clearInterval(intervalIdRef.current);
	}

	return (
		<div className="count-down">
			<div className="count-down-container">
				<h2 className={`count-down-display ${count < 6 && `count-down-red`}`}>
					{count < 10 ? `0${count}` : count}
				</h2>
			</div>
		</div>
	);
}
