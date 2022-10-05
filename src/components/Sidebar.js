import React from "react";
import NavLink from "react-router-dom"

export default function SideBar(){

    return (
        
        <div className="sidebar">
         
        <ul className="side-options">
            <a href="./try.js
            " className="options">Home</a>
            <hr />
            <a href="./about.js" className="options">About</a>
            <hr />
            <a href="./" className="options">Car List</a>
            <hr />
            <a href="" className="options">Blog</a>
            <hr />
            <a href="" className="options">Contact Us</a>
        </ul>
        </div>
        
    )
}