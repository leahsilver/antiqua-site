import React, { useEffect, useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top" role="button">
      {isVisible && (
        <div onClick={scrollToTop}>
          <IoArrowUpCircleOutline style={{ width: "60px", height: "60px" }} />
        </div>
      )}
    </div>
  );
}
