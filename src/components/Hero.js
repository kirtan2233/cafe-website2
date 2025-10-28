import React from 'react';

export default function Hero(){
  return (
    <section id="home" className="hero">
      <h1>Welcome to Café Aroma</h1>
      <p>Delicious coffee, cozy atmosphere, unforgettable moments</p>
      <button onClick={()=>alert('Welcome to Café Aroma!')}>Order Now</button>
    </section>
  );
}
