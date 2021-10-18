import React from 'react';

import PersonDetails from '../sw-components/person-details';
import {PeopleList} from '../sw-components';
import Row from '../row';

import {withRouter} from 'react-router-dom';

const PeoplePage = ({history, match}) => {

  const {id} = match.params;
  return(
    <Row left={<PeopleList onItemSelected={(id) => {history.push(id)}}/>} 
    right={<PersonDetails itemId={id}/>} />
  )
};

export default withRouter(PeoplePage);