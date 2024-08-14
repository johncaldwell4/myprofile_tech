import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './Header';
import Contents from './Contents';
import TwoColumnLayout from './Twocolumnlayout';
import Education from '../Education';
import Project from './Project';



function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Contents />
      <TwoColumnLayout />
      <Education />
      <Project /> 

    </>
  )
}

export default App
