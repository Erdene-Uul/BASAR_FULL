import React, { Component } from "react";
import shop from "../../assets/images/pages/shop.png";
class Shop extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <img src={shop} alt="shop"/>
            </div>
        );
    }
}
export default Shop;