import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details";
import Row from "../row";
import SwapiService from "../../services/swapi-service";
import {
	PersonDetails,
	PlanetDetails,
	StarshipDetails,
	PersonList,
	PlanetList,
	StarshipList
} from "../sw-components";

import "./app.css";

export default class App extends Component {
	swapiService = new SwapiService();

	render() {
		const {
			getPerson,
			getStarship,
			getPersonImage,
			getStarshipImage
		} = this.swapiService;

		const personDetails = (
			<ItemDetails
				personId={11}
				getData={getPerson}
				getImageUrl={getPersonImage}
			>
				<Record field="gender" label="Gender" />
			</ItemDetails>
		);

		const starshipDetails = (
			<ItemDetails
				personId={5}
				getData={getStarship}
				getImageUrl={getStarshipImage}
			>
				<Record field="model" label="Model" />
				<Record field="length" label="Length" />
				<Record field="costInCredits" label="Coast" />
			</ItemDetails>
		);

		return (
			<div>
				<Header />
				<PersonDetails itemId={11}></PersonDetails>
				<PlanetDetails itemId={11}></PlanetDetails>
				<StarshipDetails itemId={11}></StarshipDetails>

				<PersonList>{({ name }) => <span>{name}</span>}</PersonList>
				<StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
				<PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
				{/* 				<RandomPlanet />
				<PeoplePage getData={this.swapiService.getAllPeople} /> */}
				<Row left={personDetails} right={starshipDetails} />
			</div>
		);
	}
}
