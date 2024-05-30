import React, { useState, useEffect } from 'react';
import pil from '../images/pil.svg';
import react from '../assets/react.svg';
import figma from '../images/figma.svg';

function Projekt() {
    const [showFirst, setShowFirst] = useState(false);
    const [showProj, setShowProj] = useState(true);

    const handleClick = () => {
        setShowProj(prevState => !prevState);
    };

    useEffect(() => {
        if (!showProj) {
            const fadeInFirst = setTimeout(() => {
                setShowFirst(true);
            }, 500);
            return () => clearTimeout(fadeInFirst);
        }
    }, [showProj]);

    return (
        <div className="center">
            <div className="container">
                <a onClick={handleClick} href="#projekt">
                    <div className={`shape ${!showProj ? 'hidden' : ''}`}>
                        {showProj && (
                            <h2>Trangia<span className="h3">Digital utbildning</span></h2>
                        )}
                    </div>
                </a>
                {!showProj && (
                    <div className={`fade-in ${showFirst ? 'active' : ''}`}>
                        <div className="proj-info">
                            <a className="goBack" onClick={handleClick} href="#projekt">
                                <img className="pil" src={pil} alt="Alternative text" />
                            </a>
                            <h2>Trangia<span className="h3">Digital utbildning</span></h2>
                            <p>The Trangia project was a group project during the
                                spring term in the third year of my university education.
                                The course taught me how to work closely with an organization.
                                Trangia is the leading Swedish company when it comes to outdoor
                                cooking products.</p>
                            <span className="skills-h3">Skills</span><br />
                            <div className="skills-container">
                                <img className="skills" src={react} alt="Alternative text" />
                                <img className="skills" src={figma} alt="Alternative text" />
                            </div>
                            <a className="proj-link" href="#">Project demo</a>
                        </div>
                    </div>
                )}
            </div>
            <div className="container">
                <a onClick={handleClick} href="#contact">
                    <div className={`shape ${!showProj ? 'hidden' : ''}`}>
                        <h2>Trangia<span className="h3">Digital utbildning</span></h2>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Projekt;
