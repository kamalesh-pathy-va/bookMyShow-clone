import React from "react";

import {  BiChevronRight, BiSearch, BiChevronDown, BiMenu, BiChevronLeft, BiShareAlt } from "react-icons/bi";

const NavSm = () => {
	return (
    <>
    <div className="text-white flex items-center justify-between">
    <div>
	<h3 className="text-xl font-bold">It All Starts Here!</h3>
    </div>
    <div className="w-8 h-8">
    <BiShareAlt className="w-full h-full" />
    </div>
    </div>
    </>
  )

};

const NavLg = () => {
	return (
		<>
		<div className="container w-4/5 mx-auto px-4 flex items-center justify-between">
			<div className="flex items-center w-3/5">
				<div className="w-32 mr-5">
					<img src="https://github.com/kamalesh-pathy-va/bookMyShow-clone/blob/main/src/components/Navbar/logoBMS.png?raw=true" alt="logo" className="w-full h-full" />
				</div>
				<div className="w-full flex items-center bg-white gap-3 px-3 py-1 m-1.5 mb-0.5 rounded-sm">
					<BiSearch />
					<input type="search" className="w-full focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
				</div>
			</div>
		
			<div className="flex items-center gap-3">
				<span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
					Chennai <BiChevronDown />
				</span>
				<button className="bg-red-600 text-white text-sm rounded-sm px-2 py-1">Sign In</button>
				<div className="w-8 h-8 text-white">
					<BiMenu className="w-full h-full" />
				</div>
			</div>
		</div>
		</>
	);
};

const MovieNavbar = () => {
	return (
		<>
			<nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-800 px-4 py-2">
				<div className="md:hidden">{
					<NavSm />
				}</div>
				<div className="hidden lg:hidden md:block">{
					/*Tablet View*/
					<NavSm />
				}</div>
				<div className="hidden lg:flex">{
					/*Desktop View*/
					<NavLg />
				}</div>
			</nav>
		</>
	);
};

export default MovieNavbar;