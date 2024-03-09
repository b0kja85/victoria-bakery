import React from 'react';
import HeroImage from './hero-image';

export default function Hero() {
    return (
        <>
            <HeroImage />
            <div className="hero--headline">
                <h1>
                    <span id="hero--HL-small"> Indulge in the charm of our </span>
                    <span id="hero--HL-large">Community Bakery</span>
                    <span id="hero--HL-small">– where affordability meets freshness.</span>
                </h1>
            </div>
            <div className='hero--paragraph'>
                <p>Experience the joy of preservative-free delights, freshly baked just for you!</p>
            </div>
                <div className='hero--shop-btn'>
                    <button  className='hero--shop-btn-container'>
                        <img src='../../../public/cart_logo.png' id='hero--cart-btn-img' /> 
                        <span>SHOP NOW</span>
                    </button>
            </div>
        </>
    )
}