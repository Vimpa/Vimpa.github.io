import React, { useState, useEffect } from 'react';
import '../App.css';

const SlideIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetPosition = document.getElementById('slide-in-target').offsetTop;

      if (scrollPosition > targetPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="slide-in-target" className={`slide-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default SlideIn;