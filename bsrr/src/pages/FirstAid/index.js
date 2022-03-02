import React, { Component } from "react";
import Firstaid from "../../assets/images/pages/FirstAid.png";
class FirstAid extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <img src={Firstaid} alt="Firstaid"/>
            </div>
        );
    }
}
export default FirstAid;