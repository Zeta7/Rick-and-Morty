import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

const ResidentInfo = ({link}) =>{

    const [info, setInfo] = useState({});

    const url = link;
    useEffect((url)=>{
        axios.get(url)
            .then(res=>{
                //console.log(res.data);
                setInfo(res.data);
            })
    },[]);
        let episodies = info.episode?.length;

    return (
        <div className='card'>
            <img src={info.image} alt="img-card" />
            <div className='container_info'>
                <h2>{info.name}</h2>
                <div className='line'><hr/></div>
                <h5><span>RAZA</span><br/>{info.species}</h5>
                <h5><span>ORIGEN</span><br/>{info.origin?.name}</h5>
                <h5><span>STATUS</span><br/>{info.status}</h5>
                <h5><span>APARICION EN EPISODIOS</span><br/>{episodies}</h5>
            </div>
        </div>
    );
}

export default ResidentInfo;