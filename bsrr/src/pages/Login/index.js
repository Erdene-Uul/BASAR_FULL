import React, { Component } from "react";
import notfound from "../../assets/images/pages/NotFound.png";
class Login extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <img src={notfound} alt="notfound"/>
            </div>
        );
    }
}
export default Login;