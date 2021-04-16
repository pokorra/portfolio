import React, { useState } from "react";
import Title from "./Title";
import Content3 from "./Content3";
import Detail3 from "./Detail3";

const Section3 = () => {
  const [isVisible, setVisible] = useState(0);
  const [btn, setBtn] = useState(false);
  const [detailContent, setDetailContent] = useState(0);

  return (
    <div className="section" id="sec3">
      <Title title="3) projects i made" id="title3" />
      <Content3
        isVisible={isVisible}
        setVisible={setVisible}
        setDetailContent={setDetailContent}
      />
      <Detail3
        isVisible={isVisible}
        setVisible={setVisible}
        btn={btn}
        setBtn={setBtn}
        detailContent={detailContent}
      />
    </div>
  );
};

export default Section3;
