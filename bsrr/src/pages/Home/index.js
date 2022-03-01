import React, { useState, useEffect } from "react";
import ServiceList from "../../components/ServiceList";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Animals from "../../components/Animals";
import Section3 from "../../components/Section3";
import Section4 from "../../components/Section4";
import Section5 from "../../components/Section5";
import Popup from "../../components/PopUp";
let test = 0;
const Home = () => {

    const [showPopup, setState] = useState(false);

    const closePopup = () => {
        setState(false);
    }

    useEffect(() => {
        if (test === 0){
            setState(true)
            test++
        }
    },[])


    return (
        <div>

            <Popup closePopup={closePopup} show={showPopup} />
            <Section1 />
            <Section2 />
            <ServiceList />
            <Animals />
            <Section3 />
            <Section4 />
            <Section5 />
        </div>
    );

}
export default Home;