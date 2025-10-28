import React from 'react';

export default function Header(){
  return (
    <header>
      <div className="logo">☕ Café Aroma</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
