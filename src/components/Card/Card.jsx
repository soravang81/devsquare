import React from "react";
// @ts-ignore
import reactImg from '../../assets/react-core-concepts.png';
import "./Card.css";


function Card({children,title}) {
  return (
    <div className="card">
      <img className="card-image" src={reactImg} alt="profile picture"></img>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{children}</p>
      <button className="card-button">Learn more</button>
    </div>
  );
}
export default Card;