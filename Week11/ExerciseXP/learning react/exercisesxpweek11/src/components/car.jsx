import React from "react";
import { useState } from 'react';
import Garage from './garage';


const CarComponent = ({carInfo})=>{

    const [color, setColor] = useState('red');

    return(
       <header>
      <h1>This car is a {color} {carInfo.model}.</h1>

        <Garage size="small" />
    
      <button onClick={() => setColor('blue')}>
        Paint it Blue
      </button>
    </header>
    )
}

export default  CarComponent