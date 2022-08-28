import React, {useState} from "react";
import './App.css';
import './notifications.css';
import "@fontsource/montserrat";
import closeIcon from "./close.png"; 
import logo from "./logo.png";

const data = [
    {
        color: "brown",
        fit: "relaxed",
        length: "regular"
    },
    {
        color: "black",
        fit: "relaxed",
        length: "regular"
    },
    {
        color: "green",
        fit: "relaxed",
        length: "regular"
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

function LargeNoti() {
    const [lists, setLists] = useState(data);
    const [showAddItem, setShowAddItem] = useState(false); 
    const [type, setType] = React.useState('');
    const [fit, setFit] = React.useState("fitted"); 
    const [length, setLength] = React.useState(""); 
    const [color, setColor] = React.useState(""); 

    const initialState = [{type: "", color: "", fit: "", length: ""}]
    const [closetItems, setClosetItems] = useState([{}]); 
    var num_items = data.length;

    return(
        <div className="container">
            <br/>
            <img src={closeIcon} style={{width: 20, height: 20, marginLeft: "95%", marginBottom: -5}} className="add-button"/>
            <div>
                <img src={logo} style={{width: 40, height: 40, marginBottom: -5}}/><br/>
                <span className="h3">Hey! We noticed you already own {num_items} items like this.</span><br/><br/>
            </div>
            <div className="noti-list">
                {lists && lists.map((item) => {
                    let colorIndex = colors.map(object => object.name).indexOf(item.color); 
                    return <div style={{flexDirection: "row", marginBottom: 15}}>
                        <span className="product-detail">
                        <span style={{display: "inline-block", backgroundColor: colors[colorIndex].hex, width: 10, height: 10, marginRight: 4, alignItems: "center",  borderRadius: "100%"}}/>
                        <span>{item.color}</span>
                        </span>
                        <span className="product-detail"> {item.fit} </span>
                        <span className="product-detail"> {item.length} </span>
                    </div>
                })}
          </div>
            <h3 className="h3">Do you want to remove it from your cart?</h3>
            <div>
            <button className="action-txt sample-btn">View Closet</button> <br/><br/>
            <button className="btn-cart noti-btn">Take me to cart</button>
            </div>
        </div>
    )
}

export default LargeNoti; 