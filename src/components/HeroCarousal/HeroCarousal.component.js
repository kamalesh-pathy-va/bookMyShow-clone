import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Components
import {NextArrowLg, PrevArrowLg, NextArrow, PrevArrow} from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const requestNowPlayingMovies = async() => {
			const getImages = await axios.get("/movie/now_playing");
			console.log(getImages);
			setImages(getImages.data.results)
		};
		requestNowPlayingMovies();
	}, []);

	const settingsLg = {
		arrows: true,
		autoplay: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: "300px",
		infinite: true,
		dots: true,
		nextArrow: <NextArrowLg />,
		prevArrow: <PrevArrowLg />
	}

	const settings = {
		arrows: true,
		dots: false,
		autoplay: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	};

	return (
		<>
			<div className="lg:hidden">
				<HeroSlider {...settings}>
				{
					images.map((image) => (
						<div className="w-full h-64 md:h-80 py-3">
							<img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full"/>
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
							<img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-sm"/>
						</div>
					))
				}
				</HeroSlider>
			</div>
		</>
	);
};

export default HeroCarousal;