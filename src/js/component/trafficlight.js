import React, { useState, useEffect } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("red");
	useEffect(
		() => {
			const interval = setInterval(() => {
				color === "red"
					? setColor("green")
					: color === "yellow"
						? setColor("red")
						: color === "green"
							? setColor("yellow")
							: null;
			}, 3000);
			return () => clearInterval(interval);
		},
		[color]
	);
	return (
		<>
			<div className="trafficlight rounded-lg">
				<div
					className={color === "red" ? "red-selected" : "red-light"}
					onClick={() => setColor("red")}
				/>
				<div
					className={
						color === "yellow" ? "yellow-selected" : "yellow-light"
					}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={
						color === "green" ? "green-selected" : "green-light"
					}
					onClick={() => setColor("green")}
				/>
			</div>
		</>
	);
};
