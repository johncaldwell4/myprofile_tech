import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './Header';
import Contents from './Contents';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Contents />
    </>
  )
}

export default App
