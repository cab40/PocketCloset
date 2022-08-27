import React, {useState} from "react";
import "@fontsource/montserrat";


const data = [
    {
      name: ":P",
      url: ["https://www.figma.com/file/vB2EPq8zLghK4tWRMY8loM/Chrome-Extension?node-id=0%3A1", "https://www.google.com"]
    }
  ]

function PopUp() {
    const [lists, setLists] = useState(data);
    const openTabs = (url) => {
      for(const link of url){
        window.open(link, "_blank");
      }
    }
    return (
        <div>
        <h3>My closet</h3>
      <div className='lists'>
        {lists && lists.map((item) => {
          return(
            <button className='button' onClick={() => {openTabs(item.url)}}>{item.name}</button>
          )
        })}
      </div>
        </div>
    )
}

export default PopUp; 