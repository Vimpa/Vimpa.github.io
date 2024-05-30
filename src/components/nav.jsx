import React, { useState, useEffect } from 'react';
import '../App.css'; // Import CSS file for styling (adjust the path as needed)

function Nav() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrolledUp = currentScrollPos < prevScrollPos;

            // Update visibility based on scroll direction (scrolling up)
            setVisible(isScrolledUp || currentScrollPos === 0); // Show nav when at the top

            // Update previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`topbar ${visible ? 'visible' : 'hidden'}`}>
            <div className="navbar">
                <a href="#projekt"><span className="number">01.</span>Projects</a>
                <a href="#education"><span className="number">02.</span>Education</a>
                <a href="#contact"><span className="number">03.</span>Contact</a>
                <a href="#about"><span className="number">04.</span>About me</a>
            </div>
        </div>
    );
}

export default Nav;