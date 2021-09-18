import React from "react";
import {FaHeart} from "react-icons/fa";
import { IconContext } from "react-icons";
import {BiChevronRight, BiShareAlt} from "react-icons/bi"


const MovieHero = () => {
	const launchRazorPay = () => {
		let options = {
			key: "rzp_test_wrjxKVapo3Ud4B",
			amount: 500*100,
			currency: "INR",
			name: "Book My Show Clone",
			description: "Movie purchase or Rental",
			image: "",
			handler: () => {
				alert("Payment Successful!")
			},
			theme: {color: "#c4242d"}
		};
		let rzp = new window.Razorpay(options);
		rzp.open();
	}
	return (
		<>
	{/*For small Screen*/}
		<div className="md:hidden">
			<img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" />
		</div>
	{/*For Medium Screen*/}
		<div className="hidden md:block lg:hidden">
			<img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" />
		</div>
	{/*For Large Screen*/}
		<div className="hidden lg:block">

			{/*<div className="container relative mx-auto flex flex-start flex-row w-4/5 Z-10">
				<div className="z-30 w-72 m-5 top-10">
					<img
					src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
					alt="poster"
					className="h-full w-full rounded-xl"
					/>
				</div>
				<h1>Shang-Chi and the Legend of the Ten Rings</h1>

			</div>

			<div style={{backgroundColor:"black"}} className="relative max-w-100 mx-auto Z-1">
				<div className="absolute h-full w-full z-10"
				style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
				/>
				<img
				src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
				alt="poster"
				className="w-4/5 mx-auto"
				/>
			</div>*/}
			<div className="w-full bg-cover bg-no-repeat bg-center p-6" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%), url('https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg')"}}
			>
				<div className="relative flex flex-row flex-start">
					<div className="w-60 m-5 top-10">
						<img
						src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
						alt="poster"
						className="w-full rounded-xl"
						/>
					</div>
					<div className="w-1/3 m-4 flex flex-col gap-4">
						<h1 className="text-3xl text-white font-bold">Shang-Chi and the Legend of the Ten Rings</h1>
						<div className="my-3 flex flex-row items-center gap-3">
							<IconContext.Provider value={{color:"red", className:"global-class-name"}}>
								<FaHeart size={25}/>
							</IconContext.Provider>
							<h1 className="text-2xl text-white font-bold">91%</h1>
							<div className="flex flex-row flex-start items-center">
								<h3 className="text-1xl text-white">32.3K ratings</h3>
								<IconContext.Provider value={{color:"white", className:"global-class-name"}}>
									<BiChevronRight />
								</IconContext.Provider>
							</div>
						</div>
						<div className="bg-gray-700 flex flex-row items-center justify-between px-3 py-2 rounded-md">
							<div className="flex flex-col">
								<h2 className="text-white font-bold">Add your rating & review</h2>
								<h3 className="text-1xl text-white">Your ratings matter</h3>
							</div>
							<button className="bg-white px-4 py-2 rounded-xl text-1xl font-bold">
								Rate Now
							</button>
						</div>
						<div className="flex flex-col gap-1">
							<div className="bg-white w-max px-2">
								<a className="text-1xl text-black font-bold hover:underline" href="#">2D,</a>
								<a className="text-1xl text-black font-bold hover:underline" href="#">3D,</a>
								<a className="text-1xl text-black font-bold hover:underline" href="#">IMAX 2D,</a>
								<a className="text-1xl text-black font-bold hover:underline" href="#">MX4D,</a>
								<a className="text-1xl text-black font-bold hover:underline" href="#">4DX</a>
							</div>
							<div className="bg-white w-max px-2">
								<a className="text-1xl text-black font-medium hover:underline" href="#">English,</a>
								<a className="text-1xl text-black font-medium hover:underline" href="#">Kannada,</a>
								<a className="text-1xl text-black font-medium hover:underline" href="#">Tamil,</a>
								<a className="text-1xl text-black font-medium hover:underline" href="#">Hindi,</a>
								<a className="text-1xl text-black font-medium hover:underline" href="#">Telugu,</a>
								<a className="text-1xl text-black font-medium hover:underline" href="#">Malayalam</a>
							</div>
						</div>
						<div>
							<h2 className="font-semibold text-white">2h 12m • Action, Adventure, Fantasy • UA • 3 Sep, 2021</h2>
						</div>
						<div>
							<button onClick={launchRazorPay} className="bg-red-500 px-16 py-4 text-white font-bold rounded-xl">Book Tickets</button>
						</div>
					</div>
					<div className="absolute right-0 top-0 m-5">
						<button className="flex flex-row items-center text-2xl bg-black px-3 py-2 bg-opacity-40 rounded-md text-white font-semibold"><BiShareAlt size={35} className="pr-2"/> Share</button>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default MovieHero;