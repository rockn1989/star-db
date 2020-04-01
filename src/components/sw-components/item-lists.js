import React from "react";
import ItemList from "../item-list";
import withData from "../hoc-helpers";
import SwapiServise from "../../services/swapi-service";

const swapiService = new SwapiServise();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
