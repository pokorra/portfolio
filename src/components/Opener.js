import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Grl } from "../images/Grl.svg";
import gsap from "gsap";

const Opener = () => {
  const [isOpener, setOpener] = useState(false);
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = wrapper.current.children[0];
    const btn = wrapper.current.children[1];

    const sunset = elements.getElementById("sunset");
    const floor = elements.getElementById("floor");
    const girl = elements.getElementById("girl");

    gsap.set(floor, { transformOrigin: "50% 0%", scale: 0 });
    const tl = gsap.timeline({ defaults: { ease: "none" } });
    tl.fromTo(sunset, { y: "+=100%" }, { duration: 1, y: "-=100%", opacity: 1 })
      .fromTo(floor, { scale: 0, opacity: 0}, { duration: 1, scale: 1, opacity: 1})
      .to(girl, { duration: 1, opacity: 1 }, "=0.7")
      .fromTo(
        btn,
        { x: "+=100%" },
        { duration: 0.5, ease: "power.in", x: "-=100%", opacity: 1 },
        "=1.5"
      );
  }, []);

  const rollOut = () => {
    if (!isOpener) {
      setOpener(true);
    }
  };

  return (
    <div className={`opener ${isOpener ? "opener-roll" : ""}`} ref={wrapper}>
      <Grl />
      <button className="opener__btn" onClick={rollOut}>
        come in
      </button>
    </div>
  );
};

export default Opener;
