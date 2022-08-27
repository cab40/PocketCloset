import React, {useState} from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "@fontsource/montserrat";
import { AccordionCollapse } from "react-bootstrap";


const data = [
    {
      key: 0,
      name: "Tops",
      quantity: 2, 
      pieces: ["Tank top", "blah blah blah"]
    }, 
    {
        key: 1,
        name: "Pants", 
        quantity: 2, 
    }, 
    {
        key: 2,
        name: "Jeans", 
        quantity: 4, 
    }, 
    {
        key: 3,
        name: "Sweaters & Cardigans", 
        quantity: 13, 
    },
    {
        key: 4,
        name: "Hoodies & Sweatshirts", 
        quantity: 13, 
    },
    {
        key: 5,
        name: "Skirts", 
        quantity: 13, 
    }
  ]

function MyClosetPopUp() {
    const [lists, setLists] = useState(data);
    const openTabs = (url) => {
      for(const link of url){
        window.open(link, "_blank");
      }
    }
    return (
        <div>
            
        <h3 style={{fontFamily: "Montserrat"}}>My closet</h3>
      <div className='lists' style={{flexDirection: "column", maxWidth: 250}}>

        {lists && lists.map((item) => {
          return(
            <Accordion className='button' style={{marginBottom: 15, textAlign: "left", fontSize: 13, fontFamily: "Montserrat", fontWeight: 800, backgroundColor: "#D2AF9E", borderRadius: 8}}>
            <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls={`panel${item.key}a-content"`} onClick={() => {openTabs(item.url)}} >{item.name + " (" + item.quantity + ")"}
                </AccordionSummary>
                <AccordionDetails>
          <div>
            {item.pieces && item.pieces.map((piece) => {
                return <div>{piece}</div>
            })}
          </div>
        </AccordionDetails>
                </Accordion>
            )
        })}

      </div>
      <div>
    </div>
        </div>
    )
}

export default MyClosetPopUp; 