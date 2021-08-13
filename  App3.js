import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
//import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './Profile';
import React from "react";
import LoginPage from './LoginPage';
import Home from './Home';
import {Switch, Route, Link} from "react-router-dom";
//import Profile from './Profile';

function App() {
  return (

    <div>
    <LoginPage/>
    </div>
  )
}


export default App