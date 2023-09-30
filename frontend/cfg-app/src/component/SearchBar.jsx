import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./SearchBar.css";
export const Search = () => {
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