import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './Header';
import Contents from './Contents';
import TwoColumnLayout from './Twocolumnlayout';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Contents />
      <TwoColumnLayout />

    </>
  )
}

export default App
