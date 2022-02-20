
import './App.css';
import Navbar from './components/Navbar';
import Crop from './components/Crop';
import Home from './components/Home';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Polyhouse from './components/Polyhouse';
import Dripirrigation from './components/Dripirrigation';
import Cropdetail from './components/Cropdetail';
 
 

 
function App() {
   const [bool, setbool] = useState(true)
  return (
  <> 
  <Router> 
    <Navbar tittle="FARMING"/>
     
    <Route exact path='/' component={Home} />
    <Route exact path='/home' component={Home} />
    <Route exact path='/cropdetail' component={Crop} />
    <Route exact path='/about' component={About} />
    <Route exact path='/drip' component={Dripirrigation} />
    <Route exact path='/polyhouse' component={Polyhouse} />
     
  </Router>
  </>
  );
}

export default App;
