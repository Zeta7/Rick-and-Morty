import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({list = []}) =>{
    //console.log(list);
    return(
        <>
            {
                list.map((item, index)=>(
                    <div key={index} className='cont_list'>
                        <ResidentInfo link={item}/>
                    </div>
                ))
            }
        </>
    );
}

export default ResidentsList;