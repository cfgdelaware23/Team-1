import React from "react";
import Event from "./Event.js";
import { useState } from "react";

const EventList = (events, setEvents) => {
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
