import React from 'react';
import './Header.css'; // Import your CSS file for styling

export let Header = () => {
    return (
        <header className="sweet-header">
            <div className="logo-container">
                <img src="src\assets\logo.jpg" alt="SweetTreats Emporium" />
                <h1>SweetTreats Emporium</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}