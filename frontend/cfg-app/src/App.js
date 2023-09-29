import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import EventList from './components/Event.js'


function App() {
  return (
    <div className="App">
      <h1> Upcoming Events </h1>
      <EventList />
    </div>
  );
}

export default App;
