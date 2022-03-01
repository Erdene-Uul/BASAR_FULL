import React, { Component } from "react";
import login from "../../assets/images/pages/login.png";
class Login extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <img src={login} alt="login"/>
            </div>
        );
    }
}
export default Login;