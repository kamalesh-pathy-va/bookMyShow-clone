import React from "react";

import './Arrows.css';

export const NextArrow = (props) => {
	return(
		<>
			<div
				className={props.className}
				style={{...props.style, backgroundColor:"black"}}
				onClick={props.onClick}
			/>
		</>
	);
}

export const PrevArrow = (props) => {
	return(
		<>
			<div
				className={props.className}
				style={{...props.style, backgroundColor:"black"}}
				onClick={props.onClick}
			/>
		</>
	);
}