import React from "react";
import ItemDetails, { Record } from "../item-details";
import withData from "../hoc-helpers";
import SwapiServise from "../../services/swapi-service";

const swapiService = new SwapiServise();

const {
	getPerson,
	getStarship,
	getPlanet,
	getPersonImage,
	getStarshipImage,
	getPlanetImage
} = swapiService;

const PersonDetails = ({ itemId }) => {
	return (
		<ItemDetails
			personId={itemId}
			getData={getPerson}
			getImageUrl={getPersonImage}
		>
			<Record field="gender" label="Gender" />
		</ItemDetails>
	);
};

const PlanetDetails = ({ itemId }) => {
	return (
		<ItemDetails
			personId={itemId}
			getData={getPlanet}
			getImageUrl={getPlanetImage}
		>
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="costInCredits" label="Coast" />
		</ItemDetails>
	);
};

const StarshipDetails = ({ itemId }) => {
	return (
		<ItemDetails
			personId={itemId}
			getData={getStarship}
			getImageUrl={getStarshipImage}
		>
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="costInCredits" label="Coast" />
		</ItemDetails>
	);
};

export { PersonDetails, PlanetDetails, StarshipDetails };
