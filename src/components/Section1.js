import React, { useState } from "react";
import Title from "./Title";
import Content1 from "./Content1";
import Detail1 from "./Detail1";

const Section1 = () => {
  const [isVisible, setVisible] = useState(false);
  const [btn, setBtn] = useState(false);
  const [detailContent, setDetailContent] = useState(0);

  return (
    <div className="section" id="sec1">
      <Title title="1) a few things about me" id="title1" />
      <Content1
        isVisible={isVisible}
        setVisible={setVisible}
        setDetailContent={setDetailContent}
      />
      <Detail1
        isVisible={isVisible}
        setVisible={setVisible}
        btn={btn}
        setBtn={setBtn}
        detailContent={detailContent}
      />
    </div>
  );
};

export default Section1;
