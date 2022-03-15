import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';

function App() {

  const [dato, setDato] = useState([])

  const id = Math.floor(Math.random()*126) + 1;
    useEffect(()=>{
      axios.get(`https://rickandmortyapi.com/api/location/${id}/`)
        .then(res=>{
          console.log(res.data)
          setDato(res.data)
        })
    },[])


  return (
    <div className="App">
      <div className='mural'></div>
      <LocationInfo object={dato}/>
      <ResidentsList list={dato.residents}/>
    </div>
  );
}

export default App;
