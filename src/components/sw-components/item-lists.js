import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunction = (fn) => (Wrapped) => {
	return (props) => {
		return <Wrapped {...props}>{fn}</Wrapped>;
	};
};

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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
	withData(withChildFunction(renderName)(ItemList))
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
	withData(withChildFunction(renderName)(ItemList))
);

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
	withData(withChildFunction(renderModelAndName)(ItemList))
);

export { PersonList, PlanetList, StarshipList };
