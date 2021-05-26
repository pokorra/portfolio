import React, { useEffect, useRef } from "react";
import RollButton from "./RollButton";
import Carousel from "./Carousel";
import sectionSecondData from "../data/sectionSecondData";
import AnimationFunc from '../functions/animationFunc';
import roll from '../functions/roll';

const Detail2 = ({ isVisible, setVisible, detailContent }) => {
  const content2 = useRef(null);

  useEffect(() => {
    AnimationFunc(isVisible, content2.current, content2.current.firstChild);
  }, [isVisible, detailContent]);

  
  const data = sectionSecondData[detailContent];
  const dataList = data.list;

  return (
    <div className="detail" ref={content2}>
      <div className={`detail__inner ${data.class}`}>
        <RollButton roll={()=> {roll(setVisible)}} />
        <h3 className="detail2__title">{data.title}</h3>
        {data.class === "technologies" ? (
          <ul className="technologies__list">
            {dataList.map((item) => (
              <li className="technologies__list-item" key={item.name}>
                <img src={item.pic} alt={item.name}></img>
                <p className="technologies__list-item-name">{item.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <Carousel dataList={dataList} />
        )}
      </div>
    </div>
  );
};

export default Detail2;
