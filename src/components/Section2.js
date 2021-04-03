import React, { useState } from "react";
import Title from "./Title";
import Content2 from "./Content2";
import Detail2 from "./Detail2";

const Section2 = () => {
  const [isVisible, setVisible] = useState(false);
  const [btn, setBtn] = useState(false);
  const [detailContent, setDetailContent] = useState(0);

  return (
    <div className="section" id="sec2">
      <Title title="2) my skills and abilities" id="title2" />
      <Content2
        isVisible={isVisible}
        setVisible={setVisible}
        setDetailContent={setDetailContent}
      />
      <Detail2
        isVisible={isVisible}
        setVisible={setVisible}
        btn={btn}
        setBtn={setBtn}
        detailContent={detailContent}
      />
    </div>
  );
};

export default Section2;
