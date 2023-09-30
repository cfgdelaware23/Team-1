import React from "react";
import Event from "./Event.js";
import { useState } from "react";

const events = [
    {
      day: "Monday",
      time: "1-4pm",
      title: "Intro To Crochet",
      host_name: "Alison Smitherman"
    },
    {
        day: "Monday",
        time: "7-11pm",
        title: "Monday",
        host_name: "John"
      },
      {
        day: "Tuesday",
        time: "1-4pm",
        title: "Tuesday",
        host_name: "Henry"
      },

  ]

function EventList(events) {
    const renderListOfEvents = (events) => {
        return events.map(event => <Event
            title={event.day}
            description={event.time}
            date={event.title}
            time={event.host_name}
          />)
      }

      return (
        <div>
            {renderListOfEvents(events)}
        </div>
      );
    
}



export default EventList;