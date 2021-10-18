import React, {Component} from 'react';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapiService';
import ErrorBoundary from '../error-boundary';

import { BrowserRouter as Router, 
         Route, Switch} from 'react-router-dom';

import {
  PeoplePage, 
  PlanetPage, 
  StarshipPage, 
  LoginPage, 
  SecretPage} from '../pages';

import {StarshipDetails} from '../sw-components';

import {SwapiServiceProvider} from '../swapi-service-context';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({isLoggedIn: true});
  }

  render() {

    const {isLoggedIn} = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
            <Router>
          <div className="stardb-app">
            <AppHeader />
            <RandomPlanet/> 
            <Switch>
              <Route path="/" 
                    render={() => <h2>Welcome to starDB</h2>}
                    exact/>

              <Route path="/people/:id?" component={PeoplePage}/>

              <Route path="/planets/:id?" component={PlanetPage}/>

              <Route path="/starships/:id?" component={StarshipPage}/>
  

              <Route path="/login" 
                    render={() => (
                      <LoginPage
                      onLogin={this.onLogin}
                      isLoggedIn={isLoggedIn}/>
                    )}/>

              <Route path="/secret" 
                    render={() => (
                      <SecretPage isLoggedIn={isLoggedIn}/>
                    )}/>
                    <Route render={() => <h2>Page is not found</h2>}/>
            </Switch>
          </div>
          </Router>
      </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}