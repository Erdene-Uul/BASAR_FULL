import React, { Component } from "react";
import organizations from "../../assets/images/pages/organizations.png";
class Organizations extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <img src={organizations} alt="organizations"/>
            </div>
        );
    }
}
export default Organizations;