import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Cards from "./cards";

function App() {
  return (
    <Router>
        <Route to="/" component={Cards}/>
    </Router>
  );
}

export default App;
