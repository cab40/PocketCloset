import React, {useState} from "react";
import './App.css';
import "@fontsource/montserrat";
import closeIcon from "./close.png"; 
import logo from "./logo.png";

function SmallNoti() {
    var num_items = 2;
    return(
        <div>
            <br/>
            <img src={closeIcon} style={{width: 20, height: 20, marginLeft: "95%", marginBottom: -5}} className="add-button"/>
            <div>
                <img src={logo} style={{width: 45, height: 45, marginBottom: -5}}/><br/>
                <span className="h3">Hey! We noticed you already own {num_items} items like this.</span><br/><br/>
            </div>
            <button className="action-txt sample-btn">View Closet</button> <br/><br/>
            <button className="btn-cart noti-btn">Take me to cart</button>
        </div>
    )
}

export default SmallNoti; 