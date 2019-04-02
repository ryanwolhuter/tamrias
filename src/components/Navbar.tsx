import React from 'react';
import './Navbar.scss';

export function Navbar() {
  return (
    <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#music">Music</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
  );
}