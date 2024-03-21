import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 style={{ color: '#294B29' }}> {name} </h1>
      <p> ৳{price} </p>
    </div>
  );
}

export default MenuItem;
