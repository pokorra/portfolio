import React from "react";
import ContentItem from "./ContentItem";

const Content1 = ({ isVisible, setVisible, setDetailContent }) => {
  const id = "sec1";

  return (
    <div className="content">
      <ContentItem
        text="who am I"
        color="#ff5757"
        width="54%"
        font="white"
        setVisible={setVisible}
        isVisible={isVisible}
        setDetailContent={setDetailContent}
        number="0"
        id={id}
      />
      <ContentItem
        text="my work experiences"
        color="#ccccce"
        width="45%"
        font="black"
        setVisible={setVisible}
        isVisible={isVisible}
        setDetailContent={setDetailContent}
        number="1"
        id={id}
      />
    </div>
  );
};

export default Content1;
