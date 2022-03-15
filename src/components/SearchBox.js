import React from "react";
import { useState } from "react";
import axios from 'axios';


const SearchBox = ({setLocation}) =>{

    const [id, setId]= useState("");

    const searchID =()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${parseInt(id)}`)
            .then(res =>{
                setLocation(res.data);
            })
        document.getElementById('txt').innerHTML = "master";
    }

    return(
        
        <div className="cont_search">
            <div>
                <input type='text' id="txt" onChange={e =>setId(e.target.value)} placeholder="Ingresa el ID de la ubicacion"/>
                <input type='button' value="Search" onClick={searchID} />
            </div>
        </div>
        
    );
} 

export default SearchBox;