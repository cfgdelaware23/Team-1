import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/Event.js'
import Search from './components/Button.js'
import Form from './components/Form.js'
import RedirectComponent from './components/RedirectComponent.js'

function App() {
  return (
  <Router>
      <div className="App">
        <h1> Upcoming Events </h1>
          <EventList />
          <Search />
          <Routes>
            <Route path="/form" component={Form} />
            <Route path="/redirect" component={RedirectComponent} />
          </Routes>
      </div>
  </Router>
  );
}

export default App;
