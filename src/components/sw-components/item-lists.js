import React from "react";
import ItemList from "../item-list";
import {
	withData,
	withSwapiService,
	withChildFunction,
	compose,
} from "../hoc-helpers";

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
	<span>
		{name} ({model})
	</span>
);

const mapPersonMethodsToProps = (swapiServise) => {
	return {
		getData: swapiServise.getAllPeople,
	};
};

const mapPlanetMethodsToProps = (swapiServise) => {
	return {
		getData: swapiServise.getAllPeople,
	};
};

const mapStarshipMethodsToProps = (swapiServise) => {
	return {
		getData: swapiServise.getAllPeople,
	};
};

const PersonList = compose(
	withSwapiService(mapPersonMethodsToProps),
	withData,
	withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
	withSwapiService(mapPlanetMethodsToProps),
	withData,
	withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
	withSwapiService(mapStarshipMethodsToProps),
	withData,
	withChildFunction(renderName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
