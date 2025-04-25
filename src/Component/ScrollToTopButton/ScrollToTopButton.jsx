import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // وظيفته يشوف احنا تحت ولا لأ
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 200); // بيظهر بعد 200px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const section = document.getElementById("Header");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    isVisible && (
      <FaArrowUp
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 text-white bg-blue-600 p-2 rounded-full hover:bg-blue-800 cursor-pointer transition z-50"
        size={40}
      />
    )
  );
};

export default ScrollToTopButton;
