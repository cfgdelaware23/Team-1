import React, {useState} from "react";
import axios from 'axos'
import "./SearchBar.css";
export const SearchBar = () => {
    const [name, setName] = useState("")
function volunteerForms() {
    const [input, setInput] = useState('');
}

const handleInputChange = (e) => {
    setInputValue(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("http://127.0.0.1:5000/volunteer/one?input=${input}")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
};


    return (
            <div className="input-section">
                <i className="fa fa-search"></i>
                <input 
                placeholder="Type in Volunteers Name" 
                value = {input}
                onChange={handleInputChange}
                />
            </div>
    );
};