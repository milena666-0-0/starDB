import React from 'react';

import {PlanetList} from '../sw-components';
import PersonDetails from '../sw-components/planet-details';
import Row from '../row'

import {withRouter} from 'react-router-dom';

const PlanetPage = ({history, match}) => {

  const {id} = match.params;

  return(
  <Row left={<PlanetList onItemSelected={(id) => {history.push(id)}}/>} 
       right={<PersonDetails itemId={id}/>} />  );
};

export default withRouter(PlanetPage);