import React, { useEffect, useState } from "react";
import scroll from '../../assets/images/ScrollToTop.png'
import './style.css'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div className="w-14 h-14 items-center justify-center flex transform hover:scale-105 transition-all duration-500 ease-in-out bg-white rounded-full" onClick={scrollToTop}>
          <img src={scroll} alt='Go to top'/>
        </div>}
    </div>
  );
}