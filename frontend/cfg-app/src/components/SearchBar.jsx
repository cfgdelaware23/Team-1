import React, {useState} from "react";
import "./SearchBar.css";
export const SearchBar = () => {
    const [name, setName] = useState("")
    return (
            <div className="input-section">
                <i className="fa fa-search"></i>
                <input 
                placeholder="Type in Volunteers Name" 
                value = {name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
    );
};