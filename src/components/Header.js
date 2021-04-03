import React, { useState, useEffect } from "react";
import Typist from "react-typist";

const Header = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div className="hello" id="hello">
      <h2 className="hello__subtitle">Hello, world!</h2>
      <h1 className="hello__title">
        {count ? (
          <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
            <span>Hi, my name is Patrycja,</span>
            <Typist.Backspace count={24} delay={1500} />
            <span>I am a junior front-end developer</span>
            <Typist.Backspace count={32} delay={1500} />
          </Typist>
        ) : (
          ""
        )}
      </h1>
    </div>
  );
};

export default Header;
