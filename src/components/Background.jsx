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
import frame11 from '../assets/bg/11.png';
import frame12 from '../assets/bg/12.png';
import frame13 from '../assets/bg/13.png';
import frame14 from '../assets/bg/14.png';
import frame15 from '../assets/bg/15.png';
import frame16 from '../assets/bg/16.png';
import frame17 from '../assets/bg/17.png';
import frame18 from '../assets/bg/18.png';
import frame19 from '../assets/bg/19.png';
import frame20 from '../assets/bg/20.png';
import frame21 from '../assets/bg/21.png';
import frame22 from '../assets/bg/22.png';
import frame23 from '../assets/bg/23.png';
import frame24 from '../assets/bg/24.png';
import frame25 from '../assets/bg/25.png';

export default function Background({ scrollPosition }) {

    // Movement Logic
    const horizontalFrames = 25;
    const verticalFrames = 7;

    var horizontalMove, verticalMove;

    // grass / lava
    if (scrollPosition < 18.4) {
        verticalMove = window.innerHeight * 2;
        horizontalMove = -scrollPosition/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
    }

    // barrel elevator
    if (scrollPosition >= 18.4 && scrollPosition < 20.56) {
        horizontalMove = -18.4/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = (window.innerHeight * 2) - ((scrollPosition-18.3)/100 * document.documentElement.scrollHeight);
    }
    
    // snow
    if (scrollPosition >= 20.56 && scrollPosition < 29.70) {
        horizontalMove = -(scrollPosition-2.16)/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = window.innerHeight;
    }
    
    // wall slide down
    if (scrollPosition >= 29.70 && scrollPosition < 31.94) {
        horizontalMove = -27.5/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = window.innerHeight + ((scrollPosition-29.70)/100 * document.documentElement.scrollHeight);
    }

    // town
    if (scrollPosition >= 31.94 && scrollPosition < 45.68) {
        horizontalMove = -(scrollPosition-4.4)/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = window.innerHeight * 2;
    }

    // jump down water
    if (scrollPosition >= 45.68 && scrollPosition < 54.67) {
        horizontalMove = -41.26/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = (window.innerHeight * 2) + ((scrollPosition-45.68)/100 * document.documentElement.scrollHeight);
    }

    // underwater swim
    if (scrollPosition >= 54.67 && scrollPosition < 68.44) {
        horizontalMove = -(scrollPosition-13.39)/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = window.innerHeight * 6;
    }

    // fly up
    if (scrollPosition >= 68.44 && scrollPosition < 81.95) {
        horizontalMove = -55.0/100 * (window.innerHeight * (16 / 9) * horizontalFrames);
        verticalMove = (window.innerHeight * 6) - ((scrollPosition-68.44)/100 * document.documentElement.scrollHeight);
    }


    return (
        <div className="bg-section" style={{minHeight: `${((16 / 9) * window.innerHeight * (horizontalFrames))}px`}}>
            <p>
                X: {scrollPosition} 
                <br/> Debug: {(scrollPosition/100 * document.documentElement.clientHeight)/horizontalFrames}
                <br/> Debug: {document.documentElement.scrollHeight}
            </p>

            <div className="bg-container" style={{transform: `translate(${horizontalMove}px, ${-verticalMove}px)`, height: `${verticalFrames * 100}vh`}}>
                {/* grass */}
                <div className="frame-layer-horizontal" id="l1">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame1})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame2})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame3})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame4})`}} />
                </div>

                {/* barrel elevator */}
                <div className="frame-layer-vertical" id="l2">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame5})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame6})`}} />
                </div>

                {/* snow */}
                <div className="frame-layer-horizontal" id="l3">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame7})`}} />
                </div>

                {/* wall slide down */}
                <div className="frame-layer-vertical" id="l4">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame9})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame8})`}} />
                </div>

                {/* town */}
                <div className="frame-layer-horizontal" id="l5">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame10})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame11})`}} />
                </div>

                {/* jump down water */}
                <div className="frame-layer-vertical" id="l6">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame16})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame15})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame14})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame13})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame12})`}} />
                </div>

                {/* water */}
                <div className="frame-layer-horizontal" id="l7">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame17})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame18})`}} />
                </div>

                {/* fly up */}
                <div className="frame-layer-vertical" id="l8">
                    <div className="bg-frame" style={{backgroundImage: `url(${frame19})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame20})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame21})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame22})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame23})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame24})`}} />
                    <div className="bg-frame" style={{backgroundImage: `url(${frame25})`}} />
                </div>
                
            </div>
        </div>
    )
}
