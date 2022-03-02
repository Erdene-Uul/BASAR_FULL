import React, { Component } from "react";
import animals from "../../assets/images/pages/animals.png";

class Animals extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <img src={animals} alt="animals"/>
            </div>
        );
    }
}
export default Animals;