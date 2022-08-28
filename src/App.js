import React, { useState } from 'react';
import './App.css';
import MyClosetPopUp from './MyClosetPopUp';
import Onboarding from './Onboarding';

function App() {
  return (
    <div
      className="App"
      style={{ minWidth: 300, maxHeight: 400, overflow: 'scroll' }}
    >
      <MyClosetPopUp />
      <Onboarding />
    </div>
  );
}

export default App;
