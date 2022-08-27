import React, {useState} from "react";
import './App.css';

const data = [
  {
    name: ":P",
    url: ["https://www.figma.com/file/vB2EPq8zLghK4tWRMY8loM/Chrome-Extension?node-id=0%3A1", "https://www.google.com"]
  }
]

function App() {
  
  const [lists, setLists] = useState(data);
  const openTabs = (url) => {
    for(const link of url){
      window.open(link, "_blank");
    }
  }
  return (
    <div className="App">
      <h3>THIS IS WHAT THE YOUTUBE VIDEO MADE ME DO</h3>
      <div className='lists'>
        {lists && lists.map((item) => {
          return(
            <button className='button' onClick={() => {openTabs(item.url)}}>{item.name}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
