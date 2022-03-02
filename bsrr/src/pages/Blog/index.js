import React, { Component } from "react";
import NotFound from "../../assets/images/pages/NotFound.png";
class Blog extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <img src={NotFound} alt="NotFound"/>
            </div>
        );
    }
}
export default Blog;