import React from "react";

const Title = ({ title, id }) => {
  return (
    <h3 className="section-title" id={id}>
      {" "}
      {title.toUpperCase()}{" "}
    </h3>
  );
};

export default Title;
