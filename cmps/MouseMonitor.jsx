const { useState, useEffect, useRef } = React;
export function MouseMonitor() {
	const [position, setPosition] = useState({ isOn: true, pos: { x: 0, y: 0 } });

	useEffect(() => {
		position.isOn ? addMouseListener() : removeMouseListener();
		return () => removeMouseListener();
	}, [position.isOn]);

	function addMouseListener() {
		console.log("in");
		setPosition({ ...position, isOn: true });
		document.addEventListener("mousemove", updatePos);
	}

	function updatePos(ev) {
		if (position.isOn === true) {
			setPosition(prevPosition => ({
				...prevPosition,
				pos: { x: ev.clientX, y: ev.clientY },
			}));
			console.log(position);
		}
	}

	function removeMouseListener() {
		document.removeEventListener("mousemove", updatePos);
		setPosition(prevPosition => ({ ...prevPosition, isOn: false }));
	}

	const { x, y } = position.pos;
	return (
		<section className="mouse-monitor">
			<div className="mouse-pos">
				<div className="mouse-pos-h2">Mouse Position</div>
				<div className="position">
					x: <span className="x-pos">{x}</span>
					,y: <span className="y-pos">{y}</span>
				</div>
				<div className="buttons">
					<button type="button" className="Pause" onClick={removeMouseListener}>
						Pause
					</button>
					<button type="button" className="Resume" onClick={addMouseListener}>
						Resume
					</button>
				</div>
			</div>
		</section>
	);
}
