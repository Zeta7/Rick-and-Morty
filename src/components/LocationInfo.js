import React from "react";

const LocationInfo = ({object}) =>{
    //console.log(object);
    const leng = object.residents?.length;
    return(
        <div className="cont_LocationInfo">
            <div>
                <h2>{object?.name}</h2>
            </div>
            <div className="sub_cont_LocationInfo">
                <h5>Type: {object?.type}</h5>
                <h5>Dimension: {object?.dimension}</h5>
                <h5>Population: {leng}</h5>
            </div>
        </div>
    );
}

export default LocationInfo;