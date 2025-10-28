import React from 'react';

const items = [
  {title:'Espresso', desc:'Strong and bold coffee to start your day.'},
  {title:'Cappuccino', desc:'Creamy and frothy delight with chocolate dusting.'},
  {title:'Latte', desc:'Smooth coffee with milk and a touch of art.'}
];

export default function Menu(){
  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {items.map((it, idx)=>(
          <div className="item" key={idx}>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
