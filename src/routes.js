import React  from 'react';
import {  Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import Incidents from './pages/Incidents';


export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/logon" component={Logon}/>
      <Route path="/register" component={Register}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/incidents/new" component={NewIncident}/>
      <Route path="/incidents" component={Incidents}/>
      <Route path="/about" component={About}/>
    </Switch>
  )
}
