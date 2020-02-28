import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import "./people-page.css";
import ErrorIndicator from "../error-indicator";

export default class PeoplePage extends Component {
	state = {
		seletedPerson: 5,
		hasError: false
	};

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	onPersonSelected = id => {
		this.setState({
			seletedPerson: id
		});
	};

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		return (
			<div className="row mb2">
				<div className="col-md-6">
					<ItemList onItemSelected={this.onPersonSelected} />
				</div>
				<div className="col-md-6">
					<PersonDetails personId={this.state.seletedPerson} />
				</div>
			</div>
		);
	}
}
