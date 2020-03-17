import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

import "./app.css";

export default class App extends Component {
	swapiService = new SwapiService();
	render() {
		return (
			<div>
				<Header />
				<RandomPlanet />
				<PeoplePage getData={this.swapiService.getAllPlanets} />
				<div className="row mb2">
					<div className="col-md-6">
						<ItemList
							onItemSelected={this.onPersonSelected}
							getData={this.swapiService.getAllPlanets}
						/>
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.selectedPerson} />
					</div>
				</div>
			</div>
		);
	}
}
