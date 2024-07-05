import React from "react";
import "./Card.css";


function Card({children,title,image}) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="profile picture"></img>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{children}</p>
      <button className="card-button">Learn more</button>
    </div>
  );
}
export default Card;