import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
<link rel="stylesheet" href="style.css" />
//create your first component
export const TrafficLight = () => {
	const [selectedColor, setSelectedColor] = useState("orange");
	return (
		<div className="container mt-5">
			<div className="container d-table traffic-light w-auto rounded-4">
				<div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("orange")} className={"light orange" + (selectedColor === "orange" ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
			</div>
			<div class="pole"></div>
		</div>
	);
};

export default TrafficLight;
