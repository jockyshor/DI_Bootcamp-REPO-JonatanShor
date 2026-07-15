import React, { useState } from "react";

const Phone = () => {
  const [phoneInfo, setPhoneInfo] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  function changeColor(){
    setPhoneInfo(prev=>{return{...prev, color: "Blue"}});

  }

return(
    <>
    <div>
        <h1>
            My Phone is a {phoneInfo.brand}
        </h1>
        <p>Its a {phoneInfo.color} {phoneInfo.model} from {phoneInfo.year}</p>
    </div>

    <div>
        <button onClick={changeColor}>
        Change Color
        </button>
    </div>

    </>
);
}

export default Phone