import React, { Component } from 'react';
import './Get.css';
import Poke from "./Poke.js"
class Get extends Component {
    render() {
        return (
            <div>
                <Poke id="100" />
                <Poke id="34" />
                <Poke id="90" />
                <Poke id="60"/>
            </div>
        );
    }
}
export default Get