import React, { Component } from "react";

import Header from "../header";
import DummySwapiService from "../../services/dummy-swapi-service";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import {
	PeoplePage,
	PlanetsPage,
	StarshipsPage,
	LoginPage,
	SecretPage,
} from "../pages";
import ErrorBoundry from "../error-boundry";

import "./app.css";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { StarshipDetails } from "../sw-components";

export default class App extends Component {
	state = {
		swapiService: new SwapiService(),
		isLoggedIn: false,
	};

	onLogin = () => {
		console.log("123");
		this.setState({
			isLoggedIn: true,
		});
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
		const { isLoggedIn } = this.state;

		return (
			<div>
				<ErrorBoundry>
					<SwapiServiceProvider value={this.state.swapiService}>
						<Router>
							<Header onServiceChange={this.onServiceChange} />
							<Switch>
								<Route
									path="/"
									render={() => <h2>Welcome to SratDB</h2>}
									exact
								/>
								<Route path="/people/:id?" component={PeoplePage} />
								<Route path="/planets" component={PlanetsPage} />
								<Route path="/starships" exact component={StarshipsPage} />
								<Route
									path="/starships/:id"
									render={({ match }) => {
										const { id } = match.params;
										return <StarshipDetails itemId={id} />;
									}}
								/>
								<Route
									path="/login"
									render={() => (
										<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
									)}
								/>
								<Route
									path="/secret"
									render={() => <SecretPage isLoggedIn={isLoggedIn} />}
								/>
								<Route render={() => <h2>Page not found</h2>} />
							</Switch>
						</Router>
					</SwapiServiceProvider>
				</ErrorBoundry>
			</div>
		);
	}
}
