import React, { Component } from "react";
import service from "../../assets/images/pages/service.png";
class Services extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <img src={service} alt="service"/>
            </div>
        );
    }
}
export default Services;