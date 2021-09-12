import React from "react";
import {BiCameraMovie} from "react-icons/bi";

import MovieHero from "../components/MovieHero/MovieHero.component";
import ProfileSlider from "../components/RoundCarousal/ProfileCarousal.component";
import TempPosters from "../config/TempPosters.config";

const Movie = () => {
	return (
		<>
			<MovieHero />
			<div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
				<div className="flex flex-col items-start gap-3">
					<h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
					<p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="flex flex-col items-start gap-3">
					<h2 className="text-gray-800 font-bold text-2xl">Applicable Offers</h2>
					<div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed rounded-md p-3 border-2 w-max">
						<div className="w-6 h-6">
							<BiCameraMovie className="w-full h-full"/>
						</div>
						<div className="flex flex-col items-start">
							<h3 className="text-lg text-gray-900">Filmy Pass</h3>
							<p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
						</div>
					</div>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="flex flex-col items-start gap-3">
					<h2 className="text-gray-800 font-bold text-2xl">Cast</h2>
					<div className="container mx-auto px-4">
						<ProfileSlider images={TempPosters} title="" isDark={false}/>
					</div>
				</div>

				<div className="my-8">
					<hr />
				</div>

				<div className="flex flex-col items-start gap-3">
					<h2 className="text-gray-800 font-bold text-2xl">Crew</h2>
					<div className="container mx-auto px-4">
						<ProfileSlider images={TempPosters} title="" isDark={false}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Movie;