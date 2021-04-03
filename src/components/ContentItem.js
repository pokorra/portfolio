import React from "react";
import { Link } from "react-scroll";

const ContentItem = ({
  text,
  color,
  width,
  font,
  setVisible,
  isVisible,
  setDetailContent,
  number,
  id,
}) => {
  const unRoll = (e) => {
    if (!isVisible) {
      setVisible(true);
    }
    setDetailContent(number);
  };

  return (
    <Link
      to={id}
      smooth={true}
      duration={250}
      delay={500}
      className="content__item"
      style={{ width: width, backgroundColor: color, color: font }}
    >
      <div className="content__item-inner" onClick={unRoll}>
        {" "}
        {text}
      </div>
    </Link>
  );
};

export default ContentItem;
