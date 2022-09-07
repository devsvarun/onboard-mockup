import logo from './logo.svg';
import './App.css';
import StepperBar from './Components/StepperBar';
import MainForm from './Components/MainForm';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <div className='onboard'>
        <MainForm />
      </div>

    </div>
  );
}

export default App;
