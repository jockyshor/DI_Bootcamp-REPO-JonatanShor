import React, {useState} from "react";


function handleKeyDown(e){
   if (e.key === 'Enter') {
      alert(`You pressed Enter, and your input is: "${e.target.value}" `);
    }
}





function Events(){

    const [isToggleOn, setIsToggleOn] = useState(true);
    const handleClick = () => {
    setIsToggleOn(!isToggleOn);
    }

    return (
        <>
        <div>
            <input onKeyDown={handleKeyDown} placeholder="Insert Input and Press 'Enter'"></input>
        </div>

        <div>
        <button onClick={() => alert('I Have Been Clicked...')}>
        Click Me
        </button>
        </div>

        <div>
        <p>The switch is: <strong>{status}</strong></p>
      
        <button onClick={handleClick}>
        {isToggleOn ? 'OFF' : 'ON'}
        </button>
        </div>
        </>
    )
}

export default Events
