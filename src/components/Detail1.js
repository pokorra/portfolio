import React, { useEffect, useRef } from "react";
import RollButton from "./RollButton";
import aboutPP from "./data/section1data";
import gsap from "gsap";

const Detail1 = ({ isVisible, setVisible, detailContent }) => {
  const content1 = useRef(null);

  const roll = () => {
    setVisible(2);
  };

  useEffect(() => {
    const container = content1.current;
    const inner = content1.current.firstChild;
    if (isVisible === 1) {
      console.log(container.scrollHeight + " scroll, " + container.offsetHeight + " offset");
      const tl = gsap.timeline();
      tl.to(container, { duration: 0.1, marginBottom: "15px" })
        .to(container, {
          duration: 0.5,
          maxHeight: `${container.scrollHeight * 2}px`,
        })
        .to(inner, { duration: 0.5, autoAlpha: 1 });
    } else if (isVisible === 2) {
      const tl = gsap.timeline();
      tl.fromTo(inner, { autoAlpha: 1 }, { duration: 0.5, autoAlpha: 0 })
        .to(container, { duration: 0.5, maxHeight: "0px" })
        .fromTo(
          container,
          { marginBottom: "15px" },
          { duration: 0.1, marginBottom: "0px" }
        );
    }
  }, [isVisible, detailContent]);

  const i = detailContent;
  const data = aboutPP[i];

  return (
    <div ref={content1} className="detail">
      <div className="detail__inner">
        <RollButton roll={() => roll()} />
        {data.name === "about" ? (
          <div className="person">
            <div className="person__img">
              <div className="person__img--onhover"> </div>
            </div>
            <div className="person__text">
              <p>{data.content} </p>
              <p>{data.about} </p>
            </div>
          </div>
        ) : (
          <div className="works">
            <h3 className="works__header">{data.content} </h3>
            <ul className="works__list">
              {data.list.map((item) => (
                <li className="works__list-item list-item" key={item.place}>
                  <div className="list-item__data">
                    <p className="list-item__data-name">{item.place}</p>
                    <p className="list-item__data-date">{item.date}</p>
                  </div>
                  <p className="list-item__description">{item.desc}</p>
                </li>
              ))}
            </ul>
            <div className="works__git">
              <a href={data.gitadd} target="_blank" rel="noopener noreferrer">
                {" "}
                <div className="works__git-pic"></div>
              </a>
              <p className="works__git-data"> {data.git}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail1;
