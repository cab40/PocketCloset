import React, {useState} from "react";
import './App.css';
import "@fontsource/montserrat";
import closeIcon from "./close.png"; 
import logo from "./logo.png";

function SmallNoti() {
    var num_items = 2;
    return(
        <div>
            <img src={closeIcon} style={{width: 20, height: 20, marginLeft: "95%", marginBottom: -5}} className="add-button"/>
            <div>
                <img src={logo} style={{width: 40, height: 40, marginBottom: -5}}/>
                <span className="h3">Hey! We noticed you already own {num_items} items like this.</span><br/><br/>
            </div>
            <a className="action-txt">View Closet</a>
            <button className="btn-add noti-btn">Take me to cart</button>
        </div>
    )
}

export default SmallNoti; 