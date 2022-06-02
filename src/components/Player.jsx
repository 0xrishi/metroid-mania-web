import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash';

import idle from '../assets/sprites/Idle.png'

import run from '../assets/sprites/Run.png'

export default function Player({ scrollPosition }) {
    const [animState, setAnimState] = useState({
        'idle': true,
        'run': false
    });

    useEffect(() => {
        const handleScroll = () => {
            setAnimState({
                'idle': false,
                'run': true
            });
    
            handleEndScroll();
        }

        const handleEndScroll = debounce(() => {
            setAnimState({
                'idle': true,
                'run': false
            })
        }, 300);

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="player-container">

            {animState.idle ? <div className="idle" style={{backgroundImage: `url(${idle})`}} /> : null}
            {animState.run ? <div className="run" style={{backgroundImage: `url(${run})`}} /> : null}
            
        </div>
    )
}
