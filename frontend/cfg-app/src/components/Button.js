import React from "react";
import EventList from "./EventList";

function clickMe() {
  alert("Clicked");
}

function clickGenerateSchedule() {}

export default function Button() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <button
          alt={"Add Events"}
          onClick={clickMe}
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
          onClick={clickMe}
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
    </div>
  );
}
