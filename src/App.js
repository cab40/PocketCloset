import React, {useState} from "react";
import './App.css';
import MyClosetPopUp  from './MyClosetPopUp';

function App() {
  return (
    <div className="App" style={{minWidth: 300, maxHeight: 400, overflow: "scroll"}}>
      <MyClosetPopUp />
    </div>
  );
}

export default App;
