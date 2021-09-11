import React from "react";
import HeroSlider from "react-slick";

//Components
import {NextArrowLg, PrevArrowLg, NextArrow, PrevArrow} from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
	const settingsLg = {
		arrows: true,
		autoplay: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: "300px",
		infinite: true,
		nextArrow: <NextArrowLg />,
		prevArrow: <PrevArrowLg />
	}

	const settings = {
		arrows: true,
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	};
	const images = [
		"https://unsplash.it/950/500",
		"https://unsplash.it/950/501",
		"https://unsplash.it/950/499",
		"https://unsplash.it/951/500",
		"https://unsplash.it/849/500"
	];

	return (
		<>
			<div className="lg:hidden">
				<HeroSlider {...settings}>
				{
					images.map((image) => (
						<div className="w-full h-64 md:h-80 py-3">
							<img src={image} alt="testing" className="w-full h-full"/>
						</div>
					))
				}
				</HeroSlider>
			</div>

			<div className="hidden lg:block">
				<HeroSlider {...settingsLg}>
				{
					images.map((image) => (
						<div className="w-full h-96 px-1 py-3">
							<img src={image} alt="testing" className="w-full h-full rounded-sm"/>
						</div>
					))
				}
				</HeroSlider>
			</div>
		</>
	);
};

export default HeroCarousal;