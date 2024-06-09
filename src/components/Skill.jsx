import React from "react";

const Skill = ({ img, text }) => {
  return (
    <div className="Skill">
      <p>{text}</p>
      <img className="gomet" src={img} alt="" />
    </div>
  );
};
export default Skill;
