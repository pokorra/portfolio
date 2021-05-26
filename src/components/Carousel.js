import React from 'react';
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


const Carousel = ({ dataList }) => {
    return ( 
        <CarouselProvider
            className="slider__provider"
            naturalSlideWidth={150}
            naturalSlideHeight={70}
            totalSlides={dataList.length}
            interval={4000}
            isPlaying={true}
            infinite={true}
          >
            <Slider>
              <Slide index={0}>
                <h2 className="slider-item__title">{dataList[0].name}</h2>
                <p className="slider-item__text">{dataList[0].desc}</p>
              </Slide>
              <Slide index={1}>
                <h2 className="slider-item__title">{dataList[1].name}</h2>
                <p className="slider-item__text">{dataList[1].desc}</p>
              </Slide>
              <Slide index={2}>
                <h2 className="slider-item__title">{dataList[2].name}</h2>
                <p className="slider-item__text">{dataList[2].desc}</p>
              </Slide>
              <Slide index={3}>
                <h2 className="slider-item__title">{dataList[3].name}</h2>
                <p className="slider-item__text">{dataList[3].desc}</p>
              </Slide>
              <Slide index={4}>
                <h2 className="slider-item__title">{dataList[4].name}</h2>
                <p className="slider-item__text">{dataList[4].desc}</p>
              </Slide>
            </Slider>

            <DotGroup className="slider__dots" disableActiveDots={false}>
              <Dot slide={0} className="slider__dot">
                ☉
              </Dot>
              <Dot slide={1} className="slider__dot">
                ☉
              </Dot>
              <Dot slide={2} className="slider__dot">
                ☉
              </Dot>
              <Dot slide={3} className="slider__dot">
                ☉
              </Dot>
              <Dot slide={4} className="slider__dot">
                ☉
              </Dot>
            </DotGroup>
            <div className="slider__arrows">
              <ButtonBack className="slider__arrow">
                <FontAwesomeIcon icon={faChevronLeft} />{" "}
              </ButtonBack>
              <ButtonNext className="slider__arrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </ButtonNext>
            </div>
          </CarouselProvider>
     );
}
 
export default Carousel;