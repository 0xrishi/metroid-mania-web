import React, { useEffect, useState } from 'react'

import frame1 from '../assets/bg/1.png';
import frame2 from '../assets/bg/2.png';
import frame3 from '../assets/bg/3.png';
import frame4 from '../assets/bg/4.png';
import frame5 from '../assets/bg/5.png';
import frame6 from '../assets/bg/6.png';
import frame7 from '../assets/bg/7.png';
import frame8 from '../assets/bg/8.png';
import frame9 from '../assets/bg/9.png';
import frame10 from '../assets/bg/10.png';
import frame11 from '../assets/bg/11.png';
import frame12 from '../assets/bg/12.png';
import frame13 from '../assets/bg/13.png';

export default function Background() {

    const horizontalFrames = 9;
    const verticalFrames = 2

    const [scrollPosition, setScrollPosition] = useState();
    
    const handleScroll = () => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        setScrollPosition(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    var verticalPos;
    var horizontalPos;
    // Layer 2
    if (scrollPosition * horizontalFrames >= 200 && scrollPosition * horizontalFrames < 400) {
        verticalPos = 4;
        horizontalPos = scrollPosition * horizontalFrames;
    }
    // Layer 4, 5, 6
    else if (scrollPosition * horizontalFrames >= 600) {
        if (scrollPosition * horizontalFrames < 700)
            verticalPos = 2;
        if (scrollPosition * horizontalFrames >= 700 && scrollPosition * horizontalFrames < 800)
            verticalPos = 1;
        if (scrollPosition * horizontalFrames > 800)
            verticalPos = 0;
        horizontalPos = 600;
    }
    // Layer 1, 3
    else {
        verticalPos = 3;
        horizontalPos = scrollPosition * horizontalFrames;
    }
    

    return (
        <section className='bg-section' style={{height: `${horizontalFrames * 100}vw`}}>
            <div className="bg-layer-container" style={{transform: `translate(${-horizontalPos}vw, ${-verticalPos * 100}vh)`}}>
                {/* Layers created when we need to transition up or down */}
                <div className="bg-layer" id="l1">
                    <img src={frame1} alt="bg" />
                    <img src={frame2} alt="bg" />
                    <img src={frame3} alt="bg" />
                </div>
                <div className="bg-layer" id="l2">
                    <img src={frame4} alt="bg" />
                    <img src={frame5} alt="bg" />
                    <img src={frame6} alt="bg" />
                </div>
                <div className="bg-layer" id="l3">
                    <img src={frame7} alt="bg" />
                    <img src={frame8} alt="bg" />
                    <img src={frame9} alt="bg" />
                    <img src={frame10} alt="bg" />
                </div>
                <div className="bg-layer" id="l4">
                    <img src={frame11} alt="bg" />
                </div>
                <div className="bg-layer" id="l5">
                    <img src={frame12} alt="bg" />
                </div>
                <div className="bg-layer" id="l6">
                    <img src={frame13} alt="bg" />
                </div>
            </div>
        </section>
    )
}
