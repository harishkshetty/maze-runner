import React, { useState } from 'react';
import logo from './logo.svg';
import Maze from '../src/components/maze';
import Modal from './components/modal'
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [steps,setSteps]=useState(0);
  return (
    <div className="App">
    {steps}
<Maze modalshow={() => setShow(true)} steps={(data)=>setSteps(data)}/>
<Modal finalsteps={steps} show={show} onClick={() => setShow(false)}/>
    </div>
  );
}

export default App;
