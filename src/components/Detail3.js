import React , { useEffect, useRef } from "react";
import RollButton from "./RollButton";
import sectionThirdData from "../data/sectionThirdData";
import AnimationFunc from '../functions/animationFunc';
import roll from '../functions/roll';

const Detail3 = ({ isVisible, setVisible, detailContent }) => {
  const content3 = useRef(null);
  useEffect(() => {
    AnimationFunc(isVisible, content3.current, content3.current.firstChild);
  }, [isVisible, detailContent]);

  const i = detailContent;
  const data = sectionThirdData[i];

  return (
    <div className="detail" ref={content3}>
      <div
        className={"project detail__inner"}
      >
        <RollButton roll={()=> {roll(setVisible)}} />
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
                {item}
              </li>
            ))}
          </ul>
          <p className="project__description">
            You can see it{" "}
            <a
              href={data.view}
              target="_blank"
              rel="noopener noreferrer"
              className="project__link">
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
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail3;
