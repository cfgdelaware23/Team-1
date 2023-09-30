import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/Event.js'
import Search from './components/Button.js'
import { SearchBar } from './components/SearchBar';
import './App.css';
import Form from './components/Form.js'
import RedirectComponent from './components/RedirectComponent.js'


function App() {
  return (
    <Router>
        <div className="App">
          <div class="title">
            <h1 className='h1-spanned'> Upcoming Events </h1>
          </div>
          <div className='flexbox-container'>
            <EventList />
            <Search />
            <Routes>
              <Route path="/form" component={Form} />
              <Route path="/redirect" component={RedirectComponent} />
            </Routes>
            <div className='search-section'>
              <SearchBar />
            </div>
        </div>
        </div>
    </Router>
  );
}

export default App;
