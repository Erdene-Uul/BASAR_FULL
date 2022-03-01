import React, { Component } from "react";
import Photo from "../../assets/images/pages/notfound.png";
class Blog extends Component {
    render() {
        return (
            <div>
                <img src={Photo} alt="notFound"/>
            </div>
        );
    }
}
export default Blog;