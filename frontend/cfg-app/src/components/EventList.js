import React from "react";
import axios from "axios";
import Event from "./Event.js";
import { useState } from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);

  function updateEvents() {
    axios
      .get("/schedule")
      .then(function (response) {
        setEvents(response);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      {events.map(function (e) {
        return (
          <Event
            title={e.title}
            description={e.description}
            date={e.date}
            time={e.time}
          />
        );
      })}
    </div>
  );
};

export default EventList;
