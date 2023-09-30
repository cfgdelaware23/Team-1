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
            <div className='event-1'> 
              <h2 className="event-name"> Introduction To Crochet</h2>
              <p className="event-description"> Learn the basics of crocheting!</p>
              <p className="event-date"> Sunday, October 1</p>
              <p className="event-time"> 1pm - 4pm</p>
            </div>
            <div className='event-2'> 
              <h2 className="event-name"> Game Night </h2>
              <p className="event-description"> Come play games with everyone</p>
              <p className="event-date"> Sunday, October 1</p>
              <p className="event-time"> 7 - 9pm</p>
            </div>
            <div className='event-3'> 
              <h2 className="event-name"> Creative Journey  Non Verbal Communication </h2>
              <p className="event-description"> Learn about communicating non verbally</p>
              <p className="event-date"> Monday, October 2</p>
              <p className="event-time"> 12pm - 2pm</p>
            </div>
            <div className="events"> </div>

            <Search />
            <Routes>
              <Route path="/form" component={Form} />
              <Route path="/redirect" component={RedirectComponent} />
            </Routes>
            <div className='search-section'>
              <SearchBar />
            </div>
            <h2> Volunteer Hours </h2>
            <div className="volunteer-hours">
            <table>
                <tr>
                  <th>Volunteer Name</th>
                  <th>Number of Hours</th>
                </tr>
                <tr>
                  <td>Ronald Jabouin</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Ronald McDonald</td>
                  <td>6</td>
                </tr>
              </table>
            </div>
        </div>
        </div>
    </Router>
  );
}

export default App;
