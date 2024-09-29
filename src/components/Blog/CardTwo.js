import React from "react";
import Sdata from "../Slide/Sdata";
import "../Slide/style.css";

const CardTwo = () => {
  return (
    <>
      <div className="cardTwo top slide">
        {Sdata.map((value) => {
          return (
            <div className="box">
              <div className="img">
                <img src={value.cover} alt="img" />
              </div>
              <div className="text">
                <span>{value.category}</span>
                <h2>{value.title}</h2>
                <p>{value.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardTwo;
