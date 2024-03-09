import React from 'react';

export default function NavBar() {
    return (
        <div className="navbar--navbar">
            <div className="navbar--logo">
                <img src='../../../public/victoria_logo.png' alt='victoria-bakery-logo' />
            </div>
            <div className="navbar--left_menu">
                <ul>
                    <li>MENU</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li><img src='../../../public/cart_logo.png' /></li>
                </ul>
            </div>
        </div>
    )
}