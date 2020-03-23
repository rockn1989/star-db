import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import "./people-page.css";

import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component {
	state = {
		seletedPerson: 5
	};

	onPersonSelected = id => {
		this.setState({
			seletedPerson: id
		});
	};

	render() {
		const itemList = (
			<ItemList
				onItemSelected={this.onPersonSelected}
				getData={this.props.getData}
			>
				{i => `${i.name} (${i.birthYear})`}
			</ItemList>
		);

		const personalDetails = <ItemDetails personId={this.state.seletedPerson} />;
		return (
			<ErrorBoundry>
				<Row left={itemList} right={personalDetails} />;
			</ErrorBoundry>
		);
	}
}
