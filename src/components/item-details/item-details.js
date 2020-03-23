import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import "./item-details.css";

export default class ItemDetails extends Component {
	swapiService = new SwapiService();

	state = {
		item: null,
		image: null,
		loading: false
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updateItem();

			this.setState({
				loading: true
			});
		}
	}

	updateItem() {
		const { personId, getData, getImageUrl } = this.props;
		if (!personId) {
			return;
		}

		this.setState({ loading: true });

		getData(personId).then(item => {
			this.setState({ item, image: getImageUrl(item), loading: false });
		});
	}

	render() {
		if (!this.state.item) {
			return <span>Select a person from a list</span>;
		}

		if (this.state.loading) {
			return <Spinner />;
		}

		const {
			item: { id, name, gender, birthYear, eyeColor },
			image
		} = this.state;

		return (
			<div className="person-details card">
				<img className="person-image" src={image} />

				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Gender</span>
							<span>{gender}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Birth Year</span>
							<span>{birthYear}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Eye Color</span>
							<span>{eyeColor}</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
