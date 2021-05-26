import React, { useEffect, useRef } from "react";
import RollButton from "./RollButton";
import sectionFirstData from "../data/sectionFirstData";
import AnimationFunc from '../functions/animationFunc';
import roll from '../functions/roll';

const Detail1 = ({ isVisible, setVisible, detailContent }) => {
  const content1 = useRef(null);

  useEffect(() => {
    AnimationFunc(isVisible, content1.current, content1.current.firstChild);
  }, [isVisible, detailContent]);

  const data = sectionFirstData[detailContent];

  return (
    <div ref={content1} className="detail">
      <div className="detail__inner">
        <RollButton roll={()=> {roll(setVisible)}} />
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
