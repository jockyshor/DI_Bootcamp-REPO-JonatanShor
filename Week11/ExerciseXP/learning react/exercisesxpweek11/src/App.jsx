import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserComponent from './components/usercomponent'
import CarComponent from './components/car'
import Events from './components/events'
import Phone from './components/phone'
import Color from './components/color'

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

const carinfo = {name: "Ford", model: "Mustang"};


function App() {
  
  return (<>
    
    <p>Hello World</p>

    {myelement}

    

    <p>React is {sum} times better with JSX</p>

    <UserComponent {...user} />

    <CarComponent carInfo = {carinfo}/>

    

    <Events/>
    
  

    <Phone/>

    

    <Color/>

    
    </>
  )

}

export default App
