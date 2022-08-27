import React, {useState} from "react";
import Accordion from '@mui/material/Accordion'; 
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "@fontsource/montserrat";
import addIcon from "./add.png"; 
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import { styled } from '@mui/material/styles';
import closeIcon from "./close.png"; 
import "./MyClosetPopUp.css"; 

let data = [
    {
      key: 0,
      name: "Tops",
      quantity: 0, 
      pieces: [], 
    }, 
    {
        key: 1,
        name: "Pants", 
        quantity: 0, 
        pieces: [], 
    }, 
    {
        key: 2,
        name: "Jeans", 
        quantity: 0, 
        pieces: [], 
    }, 
    {
        key: 3,
        name: "Sweaters & Cardigans", 
        quantity: 0, 
        pieces: [], 
    },
    {
        key: 4,
        name: "Hoodies & Sweatshirts", 
        quantity: 0, 
        pieces: [], 
    },
    {
        key: 5,
        name: "Skirts", 
        quantity: 0, 
        pieces: [], 
    }
  ]

  const colors = [
    {name: "white", 
    hex: "#FFFFFF"
    }, 
    {name: "black", 
    hex: "#363636"
    }, 
    {name: "grey", 
    hex: "#A6A6A6"
    }, 
    {name: "red", 
    hex: "#A54747"
    }, 
    {name: "orange", 
    hex: "#D79950"
    }, 
    {name: "yellow", 
    hex: "#EDE284"
    }, 
    {name: "green", 
    hex: "#8EA989"
    }, 
    {name: "blue", 
    hex: "#95A6C7"
    }, 
    {name: "purple", 
    hex: "#A28BAD"
    }, 
    {name: "pink", 
    hex: "#DABAB6"
    }, 
    {name: "brown", 
    hex: "#A89074"
    }, 
  ]



function MyClosetPopUp() {
    const [lists, setLists] = useState(data);
    const [showAddItem, setShowAddItem] = useState(false); 
    const [type, setType] = React.useState('');
    const [fit, setFit] = React.useState("fitted"); 
    const [length, setLength] = React.useState(""); 
    const [color, setColor] = React.useState(""); 
    // const [tops, setTops] = React.useState([]); 
    // const [pants, setPants] = React.useState([]); 
    // const [jeans, setJeans] = React.useState([]); 
    // const [sweaters, setSweaters] = React.useState([]); 
    // const [hoodies, setHoodies] = React.useState([]); 
    // const [skirts, setSkirts] = React.useState

    const initialState = [{type: "", color: "", fit: "", length: ""}]
    const [closetItems, setClosetItems] = useState([{}]); 

    const addClosetItem = (type, color, fit, length) => {
      console.log("items: ", closetItems); 
      setClosetItems(current => [...current, {type: type, color: color, fit: fit, length: length}])
      for (let i = 0; i < 5; i++) {
        if (data[i].name === type) {
          data[i].quantity++; 
          data[i].pieces.push({color: color, fit: fit, length: length})
        }
      }
      console.log("updated items: ", closetItems); 
      setShowAddItem(false); 
    }

    const handleFit = (event) => {
      setFit(event.target.value);
    };

    const handleColor = (event) => {
      setColor(event.target.value);
    };

    const controlFitProps = (item) => ({
      checked: fit === item,
      onChange: handleFit,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });

    const controlColorProps = (item) => ({
      checked: color === item,
      onChange: handleColor,
      value: item,
      name: 'color-radio-button',
      inputProps: { 'aria-label': item },
    });

    const openTabs = (url) => {
      for(const link of url){
        window.open(link, "_blank");
      }
    }
    return (
        <div>
        <h3 style={{fontFamily: "Montserrat"}}>My closet
        <img src={addIcon} style={{width: 25, height: 25, marginLeft: 130, marginBottom:-5}} className="add-button" onClick={() => setShowAddItem(true)}/>
        </h3>
        <div>
        <Modal
        open={showAddItem}
        onClose={() => setShowAddItem(false)}
        style={{marginLeft: 20, marginTop: 50, overflowY: "scroll", paddingBottom: 15}}
      >
        <div style={{maxWidth: 210, maxHeight: 450, backgroundColor: "white", borderRadius: 8, padding: 20}}>
        <h3 style={{fontFamily: "Montserrat", marginTop: 10}} >
           New item: 
           <img src={closeIcon} style={{width: 20, height: 20, marginLeft: 110, marginBottom: -5}} className="add-button" onClick={() => setShowAddItem(false)}/>
        </h3>
      
      <FormControl sx={{ minWidth: 210, }} size="small">
      <div style={{fontFamily: "Montserrat", fontSize: 15}}>
           Type
      </div>
      <Select
        labelId="demo-select-small"
        id="type"
        value={type}
        onChange={(event) => setType(event.target.value)}
        style={{fontFamily: "Montserrat", fontSize: 15, marginTop: 10, marginBottom: 20}}
      >
        {data.map((item) => {
          return <MenuItem value={item.name} style={{fontFamily: "Montserrat", fontSize: 15}}>{item.name}</MenuItem>
        })}
      </Select>
      </FormControl>

      <div style={{fontFamily: "Montserrat", fontSize: 15}}>
           Colour
      </div>
      <div style={{flexDirection: "row", padding: 2, marginBottom: 20}}>
      {colors.map((color) => {
                return <Radio 
                {...controlColorProps(color.name)} 
                icon={<span style={{display: "inline-block", borderWidth: 10, backgroundColor: color.hex, width: 16, height: 16, borderRadius: "100%"}}/>}
                checkedIcon={<div style={{backgroundColor: color.hex, width: 16, height: 16, borderRadius: "100%"}}/>}
                />
      })}
      </div>

      <div style={{fontFamily: "Montserrat", fontSize: 15}}>
           Fit
      </div>
      <RadioGroup row defaultValue="fitted" style={{fontFamily: "Montserrat", fontSize: 15, marginBottom: 20}}>
      <FormControlLabel {...controlFitProps('fitted')} control={<Radio color="default"/>} label="fitted" style={{fontFamily: "Montserrat", fontSize: 15}}/>
        <FormControlLabel {...controlFitProps('relaxed')} control={<Radio color="default"/>} label="relaxed" />
      </RadioGroup>

      <div style={{fontFamily: "Montserrat", fontSize: 15}}>
           Length
      </div>
      <FormControl sx={{ minWidth: 210, }} size="small">
      <Select
        labelId="demo-select-small"
        id="fit"
        value={length}
        onChange={(event) => setLength(event.target.value)}
        style={{fontFamily: "Montserrat", fontSize: 15, marginTop: 10, marginBottom: 20}}
      >
        <MenuItem value="cropped" style={{fontFamily: "Montserrat", fontSize: 15}}>Cropped</MenuItem>
        <MenuItem value="regular" style={{fontFamily: "Montserrat", fontSize: 15}}>Regular</MenuItem>
        <MenuItem value="long" style={{fontFamily: "Montserrat", fontSize: 15}}>Long</MenuItem>
      </Select>
</FormControl>
    <div style={{flexDirection:"row", marginBottom: 20, justifyContent: "right", marginLeft: 100}}>
    <button className="btn-add" style={{fontFamily: "Montserrat"}} onClick={() => addClosetItem(type, color, fit, length)}>Add to closet</button>
    </div>
        </div>
      </Modal>
      </div>
      <div className='lists' style={{flexDirection: "column", maxWidth: 300}}>

        {lists && lists.map((item) => {
          return(
            <Accordion className='button' style={{marginBottom: 15, textAlign: "left", fontSize: 13, fontFamily: "Montserrat", fontWeight: 800, backgroundColor: "#D2AF9E", borderRadius: 8}}>
            <AccordionSummary  expandIcon={<ExpandMoreIcon />} aria-controls={`panel${item.key}a-content"`} onClick={() => {openTabs(item.url)}} >{item.name + " (" + item.quantity + ")"}
                </AccordionSummary>
                <AccordionDetails>
          <div>
            {item.pieces.length !==0 && item.pieces.map((piece, index) => {
                let colorIndex = colors.map(object => object.name).indexOf(piece.color); 
                let num = index + 1;
                return <div style={{flexDirection: "row", marginBottom: 15}}>
                  <span>{num + " : "}</span>
                  <span className="product-detail">
                  <span style={{display: "inline-block", backgroundColor: colors[colorIndex].hex, width: 10, height: 10, marginRight: 4, alignItems: "center",  borderRadius: "100%"}}/>
                  <span>{piece.color}</span>
                  </span>
                 <span className="product-detail"> {piece.fit} </span>
                 <span className="product-detail"> {piece.length} </span>
                 </div>
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