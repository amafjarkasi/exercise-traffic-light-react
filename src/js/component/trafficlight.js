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
			<div className="container mt-3">
				<div className="trafficlight rounded-lg pt-1">
					<div
						className={
							color === "red" ? "red-selected" : "light-off"
						}
						onClick={() => setColor("red")}
					/>
					<div
						className={
							color === "yellow" ? "yellow-selected" : "light-off"
						}
						onClick={() => setColor("yellow")}
					/>
					<div
						className={
							color === "green" ? "green-selected" : "light-off"
						}
						onClick={() => setColor("green")}
					/>
				</div>
			</div>
		</>
	);
};
