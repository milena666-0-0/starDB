import React from 'react';
import ItemList from '../item-list';
import { withData, withService, compose, withChildFunction } from '../hoc';

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PeopleList = compose(
                   withService(mapPersonMethodsToProps),
                   withData,
                   withChildFunction(renderName)
                  )(ItemList);

const PlanetList =  compose(
                    withService(mapPlanetMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                    )(ItemList);

const StarshipList = compose(
                     withService(mapStarshipMethodsToProps),
                     withData,
                     withChildFunction(renderModelAndName)
                     )(ItemList);

export {
  PeopleList,
  PlanetList,
  StarshipList
};