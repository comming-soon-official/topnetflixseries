import React from "react";
import "./Netflix.css";

const Netflix = (props) => {
  return (
    <>
      <div>
        <div className="cards">
          <div className="card">
            <img src={props.image} alt="mypic" className="card__img" />
            <div className="card__info">
              <span className="card__category"> A Netflix Orginal Series </span>
              <h3 className="card__title"> {props.title} </h3>
              <a href={props.download} target="_blank">
                <button> Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Netflix;
