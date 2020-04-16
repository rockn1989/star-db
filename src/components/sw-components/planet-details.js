import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="costInCredits" label="Coast" />
		</ItemDetails>
	);
};

const mapMethodsToProps = (swapiServise) => {
	return {
		getData: swapiServise.getPlanet,
		getImageUrl: swapiServise.getPlanetImage,
	};
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
