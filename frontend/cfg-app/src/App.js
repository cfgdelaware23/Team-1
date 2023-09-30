import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import EventList from './components/Event.js'
import Button from './components/Button.js'


function App() {
  return (
    <div className="App">
      <h1> Upcoming Events </h1>
      <EventList />
      <Button />
    </div>
  );
}

export default App;
