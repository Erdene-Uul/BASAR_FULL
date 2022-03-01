import React, { Component } from "react";
import notfound from "../../assets/images/pages/notfound.png";
class Blog extends Component {
    render() {
        return (
            <div>
                <img src={notfound} alt="notfound"/>
            </div>
        );
    }
}
export default Blog;