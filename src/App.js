import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/addemp" component={AddEmployee} />
          <Route exact path="/viewemp/:id" component={ViewEmployee} />
          <Route exact path="/editemp/:id" component={EditEmployee} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
