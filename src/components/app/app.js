import React, { Component } from "react";

import Header from "../header";
import DummySwapiService from "../../services/dummy-swapi-service";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import ErrorBoundry from "../error-boundry";

import "./app.css";

export default class App extends Component {
	state = {
		swapiService: new SwapiService(),
	};

	onServiceChange = () => {
		this.setState(({ swapiService }) => {
			const Service =
				swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

			console.log("switched to", `${Service.name}`);

			return {
				swapiService: new Service(),
			};
		});
	};

	render() {
		return (
			<div>
				<ErrorBoundry>
					<SwapiServiceProvider value={this.state.swapiService}>
						<Header onServiceChange={this.onServiceChange} />
						<PeoplePage />
						<PlanetsPage />
						<StarshipsPage />
					</SwapiServiceProvider>
				</ErrorBoundry>
			</div>
		);
	}
}
