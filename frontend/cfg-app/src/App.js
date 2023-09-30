import React from "react";


function clickMe() {
  alert('Clicked');
}
export default function App() {
    return(

      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

        <div>
        <button alt={"Add Events"} onClick={clickMe} style={{backgroundColor: "#e3faff", width: "150px", height: "100px", 
        borderRadius: "15px", fontFamily: "Roboto", fontWeight: "bold", fontSize: "27px"}}>
          Add Events
        </button>
        <p></p>
        <button alt={"Add Events"} onClick={clickMe} style={{backgroundColor: "#e3faff", width: "150px", height: "100px", 
        borderRadius: "15px", fontFamily: "Roboto", fontWeight: "bold", fontSize: "27px"}}>
          Remove Events
        </button>
        </div>
      </div>
    );
}