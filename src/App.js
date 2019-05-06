import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Layout/Header';
import About from './components/pages/About';
import AddContacts from './components/Contacts/AddContacts';
import EditContact from './components/Contacts/EditContact';
import Test from './components/tests/Test';
import NotFound from './components/pages/NotFound';

import {Provider} from "./context";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
  render() {
    return (
        <Provider>
            <Router>
          <div className="App">
              <Header branding="Contact Manager"/>
              <div className="container">
                  <Switch>
                      <Route exact path="/" component={Contacts}/>
                      <Route exact path="/about" component={About} />
                      <Route exact path="/contact/add" component={AddContacts} />
                      <Route exact path="/contact/edit/:id" component={EditContact} />
                      <Route exact path="/test" component={Test}/>
                      <Route component={NotFound}/>

                  </Switch>

              </div>
          </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
