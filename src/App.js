import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import {
  Main,
  Login,
  GenericNotFound
} from './containers';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="App" component={ Main }/>
          <Route path="/login" name="Login" component={ Login }/>
          <Route component={ GenericNotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

