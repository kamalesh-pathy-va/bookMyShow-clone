import React from "react";

const Poster = (props) => {
	return(
		<>
			<div className="flex flex-col place-items-center gap-2 px-3">
				<div className="h-50 md:h-80">
					<img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl"/>
				</div>
				<h3 className={`text-lg font-bold ${
					props.isDark ? "text-white" : "text-grey-700"
				}`}>
					{props.original_title}
				</h3>
				<p className={`text-sm font-bold ${
					props.isDark ? "text-white" : "text-grey-700"
				}`}>
					{props.subtitle}
				</p>
			</div>
		</>
	);
};

export default Poster;