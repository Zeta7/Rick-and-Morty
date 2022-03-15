import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
import SearchBox from './components/SearchBox';

function App() {

  const [dato, setDato] = useState([])

  useEffect(()=>{
      const id = Math.floor(Math.random()*126) + 1;
      axios.get(`https://rickandmortyapi.com/api/location/${id}/`)
        .then(res=>{
          console.log(res.data)
          setDato(res.data)
        })
    },[]);

  return (
    <div className="App">
      <div className='mural'>
        <h1>Rick and Morty</h1>
    <SearchBox setLocation={setDato}/>
      </div>
      <LocationInfo object={dato}/>
      <ResidentsList list={dato.residents}/>
    </div>
  );
}

export default App;
