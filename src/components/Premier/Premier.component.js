import React from "react";
import Slider from "react-slick";
import {BiChevronRight, BiChevronLeft} from "react-icons/bi"
import { IconContext } from "react-icons";

import Poster from "../Poster/poster.component";

function NextArrow(props) {
	return (
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#666666",
					width:"40px",
					height:"40px",
					position:"absolute",
					right:"0",
					top:"0",
					transform:"translateY(130px)",
					borderRadius:"50%",
					fontSize:"40px",
					zIndex:"2"
				}}
				onClick={props.onClick}
			>
				<IconContext.Provider value={{color:"white", className:"global-class-name"}}>
					<div>
						<BiChevronRight />
					</div>
				</IconContext.Provider>
			</div>
		</>
	);
}

function PrevArrow(props) {
	return (
		<>
			<div
				className="slick-arrow"
				style={{...props.style,
					display:"block",
					backgroundColor:"#666666",
					width:"40px",
					height:"40px",
					position:"absolute",
					left:"0",
					top:"0",
					transform:"translateY(130px)",
					borderRadius:"50%",
					fontSize:"40px",
					zIndex:"2"
				}}
				onClick={props.onClick}
			>
				<IconContext.Provider value={{color:"white", className:"global-class-name"}}>
					<div>
						<BiChevronLeft />
					</div>
				</IconContext.Provider>
			</div>
		</>
	);
}

const Premier = () => {
	const settings = {
		infinite: true,
		autoplay: false,
		slidesToShow: 5,
		slidesToScroll: 2,
		InitialSlide: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
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