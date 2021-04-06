import React from "react";
import ContentItem from "./ContentItem";

const Content3 = ({ isVisible, setVisible, setDetailContent }) => {
  const id = "sec3";
  return (
    <div className="content">
      <ContentItem
        text="conversationals api"
        color="#38b6ff"
        width="57%"
        font="#fff"
        setVisible={setVisible}
        isVisible={isVisible}
        setDetailContent={setDetailContent}
        number="0"
        id={id}
      />
      <ContentItem
        text="animal collective"
        color="#ffde59"
        width="42%"
        font="#000"
        setVisible={setVisible}
        isVisible={isVisible}
        setDetailContent={setDetailContent}
        number="1"
        id={id}
      />
      <ContentItem
        text="question game"
        color="#545454"
        width="47%"
        font="#fff"
        setVisible={setVisible}
        isVisible={isVisible}
        setDetailContent={setDetailContent}
        number="2"
        id={id}
      />
      <ContentItem
        text="book quiz"
        color="#ff5757"
        width="52%"
        font="#fff"
        setVisible={setVisible}
        isVisible={isVisible}
        setDetailContent={setDetailContent}
        number="3"
        id={id}
      />
      {/* <ContentItem
        text="best shop"
        color="#ff5757"
        width="30%"
        font="#fff"
        setVisible={setVisible}
        isVisible={isVisible}
        setDetailContent={setDetailContent}
        number="4"
        id={id}
      /> */}
    </div>
  );
};

export default Content3;
