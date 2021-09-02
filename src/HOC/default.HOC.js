// Transforms component into another component
// Adding aditional functionality to the existing components
import React from "react";
import {Route} from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component: Component, ...rest}) => {
	return (
		// components
		// props -> path, exact
		<>
			<Route {...rest} component = {
				(props) => (
					<DefaultLayout>
					<Component {...props} />
					</DefaultLayout>
					)
			} />
		</>
	);
};

export default DefaultHOC;