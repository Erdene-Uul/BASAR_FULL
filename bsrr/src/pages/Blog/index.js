import React, { Component } from "react";
import blog from "../../assets/images/pages/blog.png";
class Blog extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <img src={blog} alt="blog"/>
            </div>
        );
    }
}
export default Blog;