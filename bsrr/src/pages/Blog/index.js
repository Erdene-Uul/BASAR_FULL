import React, { Component } from "react";
import notFound from "../../assets/images/pages/notfound.png";
class Blog extends Component {
    render() {
        return (
            <div>
                <img src={notFound} alt="notFound"/>
            </div>
        );
    }
}
export default Blog;