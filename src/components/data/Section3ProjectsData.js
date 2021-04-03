import quiz from "./quiz.png";
import bestShop from "./bestShop.png";
import emi from './emi.png';
import acollective from "./acollective.png";
import conversationals from "./conversationals.png";

const projects = [
  {
    name: "Conversationals",
    desc:
      "Conversationals It is exclusively Polish-language project, created to give people with low communication skills a hand. This project logic has been written in vanilla JS, with no frameworks. Although, I made a shy attempt to use one JS library: a Gsap. JSON-tree has been stored online. To code layout I did use SCSS features and then processed it with Gulp.js.",
    tech: ["Vanilla JS", "SCSS", "Gsap"],
    code: "https://github.com/pokorra/conversationals",
    view: "https://pokorra.github.io/conversationals",
    photo: conversationals,
  },
  {
    name: "Animal Collective",
    desc:
      "Layout of fictional organization made in pure JS and CSS. I focused on CSS variables, pseudo elements and simple animations that made this page fully responsive and pleasant to look at.",
    tech: ["JavaScript", "CSS"],
    code: "https://github.com/pokorra/animals-portfolio",
    view: "https://pokorra.github.io/animals-portfolio",
    photo: acollective,
  },
  
  {
    name: "Question Game ReactJS",
    desc:
      "My very first unaided React project. This is where I learned a lot about passing props down, also I learned how to use react hooks etc., but the most important for me was learning how to design a simple application.",
    tech: ["React", "SCSS"],
    code: "https://github.com/pokorra/quiz-game",
    view: "https://pokorra.github.io/quiz-game/",
    photo: quiz,
  },
  {
    name: "Book Promo Quiz",
    desc:
      `Simple quiz made for a publishing house, one of my first front-end jobs;) If you pass the quiz, and it isn't difficult since you need less than 1/3 points, you can read first chapter of the "Emi and Secret Supergirls' Club" series. Nice addition is a snow created with React Snowfall package`,
    tech: ["React", "SCSS"],
    code: "https://github.com/pokorra/emi-promo",
    view: "https://pokorra.github.io/emi-promo/",
    photo: emi,
  },
  {
    name: "Best Shop",
    desc:
      "At the beginning there were only pure HTML and CSS, but after that I have decided to make it mobile responsive, so with the Gulp preprocessor I changed CSS over to SCSS and added few lines in JS to make it mobile friendly.",
    tech: ["SCSS", "Gulp", "RWD", "HTML"],
    code: "https://github.com/pokorra/best-shop",
    view: "https://pokorra.github.io/best-shop/",
    photo: bestShop,
  },
];

export default projects;
