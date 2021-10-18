import React from 'react';

import {StarshipList} from '../sw-components';
import {withRouter} from 'react-router-dom';
import Row from '../row';
import PersonDetails from '../sw-components/starship-details';

const StarshipPage = ({history, match}) =>{

  const { id } = match.params;

  return(
    <Row left={<StarshipList onItemSelected={(id) => {history.push(id)}}/>} 
    right={<PersonDetails itemId={id}/>} />
  );
};

export default withRouter(StarshipPage);