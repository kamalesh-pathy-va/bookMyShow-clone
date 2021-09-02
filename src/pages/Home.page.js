import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";

const HomePage = () => {
	return (
		<>
			<div className="container mx-12 px-4">
				<h1 className="text-2xl font-bold text-gray-800">
					The best of Entertainment
				</h1>
				<EntertainmentCardSlider />
				<Premier />
			</div>
		</>
	);
};

export default HomePage;