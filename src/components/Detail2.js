import React, { useEffect, useRef } from "react";
import RollButton from "./RollButton";
import skills from "./data/section2data";
import AnimationFunc from '../functions/animationFunc';
import roll from '../functions/roll';
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Detail2 = ({ isVisible, setVisible, detailContent }) => {
  const content2 = useRef(null);

  useEffect(() => {
    AnimationFunc(isVisible, content2.current, content2.current.firstChild);
  }, [isVisible, detailContent]);

  const i = detailContent;
  const skill = skills[i];
  const skillList = skill.list;

  return (
    <div className="detail" ref={content2}>
      <div className={`detail__inner ${skill.class}`}>
        <RollButton roll={()=> {roll(setVisible)}} />
        <h3 className="detail2__title">{skill.title}</h3>
        {skill.class === "technologies" ? (
          <ul className="technologies__list">
            {" "}
            {skillList.map((item) => (
              <li className="technologies__list-item" key={item.name}>
                <img src={item.pic} alt={item.name}></img>
                <p className="technologies__list-item-name">{item.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <CarouselProvider
            className="slider__provider"
            naturalSlideWidth={150}
            naturalSlideHeight={70}
            totalSlides={5}
            interval={5000}
            isPlaying={true}
            infinite={true}
          >
            <Slider>
              <Slide index={0}>
                <h2 className="slider-item__title">{skillList[0].name}</h2>
                <p className="slider-item__text">{skillList[0].desc}</p>
              </Slide>
              <Slide index={1}>
                <h2 className="slider-item__title">{skillList[1].name}</h2>
                <p className="slider-item__text">{skillList[1].desc}</p>
              </Slide>
              <Slide index={2}>
                <h2 className="slider-item__title">{skillList[2].name}</h2>
                <p className="slider-item__text">{skillList[2].desc}</p>
              </Slide>
              <Slide index={3}>
                <h2 className="slider-item__title">{skillList[3].name}</h2>
                <p className="slider-item__text">{skillList[3].desc}</p>
              </Slide>
              <Slide index={4}>
                <h2 className="slider-item__title">{skillList[4].name}</h2>
                <p className="slider-item__text">{skillList[4].desc}</p>
              </Slide>
            </Slider>

            <DotGroup className="slider__dots" disableActiveDots={false}>
              <Dot slide={0} className="slider__dot">
                {" "}
                ☉{" "}
              </Dot>
              <Dot slide={1} className="slider__dot">
                {" "}
                ☉
              </Dot>
              <Dot slide={2} className="slider__dot">
                {" "}
                ☉
              </Dot>
              <Dot slide={3} className="slider__dot">
                {" "}
                ☉
              </Dot>
              <Dot slide={4} className="slider__dot">
                {" "}
                ☉
              </Dot>
            </DotGroup>
            <div className="slider__arrows">
              <ButtonBack className="slider__arrow">
                {" "}
                <FontAwesomeIcon icon={faChevronLeft} />{" "}
              </ButtonBack>
              <ButtonNext className="slider__arrow">
                {" "}
                <FontAwesomeIcon icon={faChevronRight} />
              </ButtonNext>
            </div>
          </CarouselProvider>
        )}
      </div>
    </div>
  );
};

export default Detail2;
