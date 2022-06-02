import React from 'react'

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

export default function Background({ scrollPosition }) {

    // Movement Logic
    const horizontalFrames = 8;
    const verticalFrames = 3;

    var horizontalMove, verticalMove;

    // grass / lava
    if (scrollPosition < 43) {
        verticalMove = window.innerHeight;
        horizontalMove = -scrollPosition/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
    }

    // barrel elevator
    if (scrollPosition >= 43 && scrollPosition < 50) {
        horizontalMove = -43/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = window.innerHeight -((scrollPosition-43)/100 * document.documentElement.scrollHeight);
    }
    
    // snow
    if (scrollPosition >= 49.2 && scrollPosition < 77.75) {
        horizontalMove = -(scrollPosition-6)/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = 0;
    }
    
    // wall slide down
    if (scrollPosition >= 78 && scrollPosition < 85) {
        horizontalMove = -71.75/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = ((scrollPosition-78)/100 * document.documentElement.scrollHeight);
    }

    // town
    if (scrollPosition >= 85) {
        horizontalMove = -(scrollPosition-13)/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = window.innerHeight;
    }


    return (
        <div className="bg-section" style={{minHeight: `${((16 / 9) * window.innerHeight * (horizontalFrames))}px`}}>
            <p>
                X: {scrollPosition} 
                <br/> Debug: {verticalMove}
                <br/> Debug: {document.documentElement.scrollHeight}
            </p>

            <div className="bg-container" style={{transform: `translate(${horizontalMove}px, ${-verticalMove}px)`, height: `${verticalFrames * 100}vh`}}>
                <div className="frame-layer-horizontal" id="l1">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame1})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame2})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame3})`}} />
                </div>

                <div className="frame-layer-vertical" id="l2">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame4})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame5})`}} />
                </div>

                <div className="frame-layer-horizontal" id="l3">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame6})`}} />
                </div>

                <div className="frame-layer-vertical" id="l4">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame8})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame7})`}} />
                </div>

                <div className="frame-layer-horizontal" id="l5">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame9})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame10})`}} />
                </div>
                
            </div>
        </div>
    )
}
