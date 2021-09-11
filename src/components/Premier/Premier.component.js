import React from "react";
import Slider from "react-slick";
// import {BiChevronRight, BiChevronLeft} from "react-icons/bi"
// import { IconContext } from "react-icons";

import Poster from "../Poster/poster.component";

//Setting config file and the next & prev arrow functions(components)
import settings from "../../config/PosterCarousal.config";

//Image file config
import PremierImages from "../../config/TempPosters.config";

//This file had the functions for the next & prev arrows, now at config folder.

const Premier = () => {
	return(
		<>
			<div className="flex flex-col items-start py-4">
				<h3 className="text-white text-xl font-bold">Premiers</h3>
				<p className="text-white text-sm">Brand new releases every Friday</p>
			</div>
			<Slider {...settings}>
				{PremierImages.map((image) => (
					<Poster {...image} isDark/>))}
			</Slider>
		</>
	);
};

export default Premier;