import React from "react";

const singleCard = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img src={card.src} alt="card front" className="front" />
        <img src="/img/cover.png" alt="cover" className="back" />
      </div>
    </div>
  );
};

export default singleCard;
