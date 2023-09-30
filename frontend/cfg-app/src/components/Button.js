import React from "react";
import Form from "./Form.js";
import { Link } from "react-router-dom";
import EventList from "./EventList.js";
import axios from "axios";

/* Update the state of the component in the click handler by utilizing setState */
const Search = (events, setEvents) => {
  /* When state changes are applied, the render method gets called again with the new state */
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

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
      <input
        value="Generate Schedule"
        onClick={updateEvents}
        style={{
          backgroundColor: "#e3faff",
          width: "150px",
          height: "100px",
          borderRadius: "15px",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: "27px",
        }}
      />
      <input
        type="submit"
        value="Add Events"
        onClick={onClick}
        style={{
          backgroundColor: "#e3faff",
          width: "150px",
          height: "100px",
          borderRadius: "15px",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: "27px",
        }}
      />
      {showResults ? <Form /> : null}
    </div>
  );
};

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <div>
    <button>
      <Link to="/form">Click me</Link>
    </button>
    <button
      alt={"Add Events"}
      style={{
        backgroundColor: "#e3faff",
        width: "150px",
        height: "100px",
        borderRadius: "15px",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "27px",
      }}
    >
      Add Events
    </button>
    <p></p>
    <button
      alt={"Remove Events"}
      style={{
        backgroundColor: "#e3faff",
        width: "150px",
        height: "100px",
        borderRadius: "15px",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "27px",
      }}
    >
      Remove Events
    </button>
  </div>
</div>;

export default Search;
