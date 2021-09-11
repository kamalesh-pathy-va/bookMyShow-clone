import React from "react";
import {Route} from "react-router-dom";

//Layouts
import MovieLayout from "../layouts/Movies.Layout";

const MovieHOC = ({component: Component, ...rest}) => {
	return (
		// components
		// props -> path, exact
		<>
			<Route {...rest} component = {
				(props) => (
					<MovieLayout>
					<Component {...props} />
					</MovieLayout>
					)
			} />
		</>
	);
};

export default MovieHOC;