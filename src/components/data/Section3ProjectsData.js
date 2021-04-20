import quiz from "./quiz.png";
import emi from './emi.png';
import acollective from "./acollective.png";
import conversationals from "./conversationals.png";

const projects = [
  {
    name: "Conversationals",
    desc:
      "Conversationals is exclusively Polish-language project, created to give people with low communication skills a hand. This project logic has been written in vanilla JS, with no frameworks. Although, for page intro I used a Gsap library. JSON-tree has been stored online. To code layout I did use SCSS features and then processed it with Gulp.js.",
    tech: ["Vanilla JS", "SCSS", "Gsap", "Gulp"],
    code: "https://github.com/pokorra/conversationals-api",
    view: "https://pokorra.github.io/conversationals-api",
    photo: conversationals,
  },
  {
    name: "Animal Collective",
    desc:
      "Layout of the fictional organization made in pure JS and CSS. I focused on CSS variables, pseudo elements and simple animations that made this page fully responsive and pleasant to look at. Also, for the first time I added a dark mode to my website, so I was quite pleased with myself",
    tech: ["JavaScript", "CSS"],
    code: "https://github.com/pokorra/animals-portfolio",
    view: "https://pokorra.github.io/animals-portfolio",
    photo: acollective,
  },
  
  {
    name: "Question Game ReactJS",
    desc:
      "My very first unaided React project basically based on form validation. This is where I learned a lot about passing props down, also I learned how to use react hooks etc., but the most important for me was learning how to design an application.",
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
];

export default projects;
