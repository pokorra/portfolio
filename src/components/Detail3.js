import React , { useEffect, useRef } from "react";
import RollButton from "./RollButton";
import projects from "./data/Section3ProjectsData";
import gsap from "gsap";

const Detail3 = ({ isVisible, setVisible, detailContent }) => {
  const content3 = useRef(null);
  const roll = () => {
    setVisible(2);
  };

  useEffect(() => {
    const container = content3.current;
    const inner = content3.current.firstChild;
    if (isVisible === 1) {
      const tl = gsap.timeline();
      tl.to(container, { duration: 0.1, marginBottom: "15px" })
        .to(container, {
          duration: 0.5,
          maxHeight: `${container.scrollHeight * 2.5}px`,
        })
        .to(inner, { duration: 0.5, autoAlpha: 1 });
    } else if (isVisible === 2) {
      const tl = gsap.timeline();
      tl.fromTo(inner, { autoAlpha: 1 }, { duration: 0.3, autoAlpha: 0 })
        .to(container, { duration: 0.5, maxHeight: "0px" })
        .fromTo(
          container,
          { marginBottom: "15px" },
          { duration: 0.1, marginBottom: "0px" }
        );
    }
  }, [isVisible, detailContent]);
  const i = detailContent;
  const data = projects[i];

  return (
    <div className="detail" ref={content3}>
      
      <div
        className={"project detail__inner"}
      >
        <RollButton roll={roll} />
        <div className="project__img-container">
          <a href={data.view} target="_blank" rel="noopener noreferrer">
            <img
              className="project__img"
              src={data.photo}
              alt={data.name}
            ></img>
          </a>
        </div>
        <div className="project__data">
          <h3 className="project__title">{data.name}</h3>
          <p className="project__description">{data.desc}</p>
          <ul className="project__list">
            {data.tech.map((item) => (
              <li className="project__list-item" key={item}>
                {" "}
                {item}{" "}
              </li>
            ))}
          </ul>
          <p className="project__description">
            You can see it{" "}
            <a
              href={data.view}
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              {" "}
              here
            </a>
            , or you can view the code{" "}
            <a
              href={data.code}
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              there
            </a>
            .{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail3;
