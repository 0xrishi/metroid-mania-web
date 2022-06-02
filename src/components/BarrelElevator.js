import React from 'react'

import Barrel from '../assets/Elevator.png'

export default function BarrelElevator({ scrollPosition }) {

    var horizontalMove;

    if(scrollPosition < 43) {
        horizontalMove = -scrollPosition/100 * (window.innerHeight * (16 / 9) * 8);
    }
    if(scrollPosition >= 49) {
        horizontalMove = -(scrollPosition-6.11)/100 * (window.innerHeight * (16 / 9) * 8);
    }

    return (
    <div className="barrel-elevator" style={{transform: `translateX(${horizontalMove}px)`}}>
        <img src={Barrel} alt="Barrel Elevator" />
    </div>
    )
}
