import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import SwapiService from "../../services/swapi-service";

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
			/>
		);

		const starshipDetails = (
			<ItemDetails
				personId={5}
				getData={getStarship}
				getImageUrl={getStarshipImage}
			/>
		);

		return (
			<div>
				<Header />
				{/* 				<RandomPlanet />
				<PeoplePage getData={this.swapiService.getAllPeople} /> */}
				<Row left={personDetails} right={starshipDetails} />
			</div>
		);
	}
}
