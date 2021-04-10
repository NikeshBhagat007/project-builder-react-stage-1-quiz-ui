import React, { Component } from 'react';
import "./Style.css"

class HomeComponent extends Component {
    render() {
        return (
            <div className="homecontainer">
                <h2 style ={{color:"white"}}>Quiz App</h2>
                <button className="btnPlay">Play</button>
            </div>
        );
    }
}

export default HomeComponent;