import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";

const Premier = () => {
	const settings = {
		infinite: true,
		autoplay: false,
		slidesToShow: 5,
		slidesToScroll: 2,
		InitialSlide: 0
	};
	const PremierImages = [
		{
			src:"https://unsplash.it/400/600",
			alt:"SomeImage",
			title:"An unsplash Image",
			subtitle:"Action"
		},
		{
			src:"https://unsplash.it/400/601",
			alt:"SomeImage",
			title:"An unsplash Image",
			subtitle:"Action"
		},
		{
			src:"https://unsplash.it/401/600",
			alt:"SomeImage",
			title:"An unsplash Image",
			subtitle:"Action"
		},
		{
			src:"https://unsplash.it/400/599",
			alt:"SomeImage",
			title:"An unsplash Image",
			subtitle:"Action"
		},
		{
			src:"https://unsplash.it/399/600",
			alt:"SomeImage",
			title:"An unsplash Image",
			subtitle:"Action"
		},
		{
			src:"https://unsplash.it/401/599",
			alt:"SomeImage",
			title:"An unsplash Image",
			subtitle:"Action"
		},
		{
			src:"https://unsplash.it/399/601",
			alt:"SomeImage",
			title:"An unsplash Image",
			subtitle:"Action"
		},
		{
			src:"https://unsplash.it/401/601",
			alt:"SomeImage",
			title:"An unsplash Image",
			subtitle:"Action"
		},
		{
			src:"https://unsplash.it/399/599",
			alt:"SomeImage",
			title:"An unsplash Image",
			subtitle:"Action"
		},
		{
			src:"https://unsplash.it/402/600",
			alt:"SomeImage",
			title:"An unsplash Image",
			subtitle:"Action"
		}
	];

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