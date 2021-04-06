import bootstrap from "./bootstrap.png";
import git from "./git.png";
import gulp from "./gulp.png";
import html from "./html.png";
import javascript from "./javascript.png";
import npm from "./npm.png";
import react from "./react.png";
import sass from "./sass.png";
import css from "./css.png";
import gsap from "./gsap.png";


const skills = [
  {
    title: "Technologies and tools I am familiar with:",
    list: [
      { name: "React JS", pic: react },
      { name: "JavaScript ES6", pic: javascript },
      { name: "Sass", pic: sass },
      { name: "CSS", pic: css },
      { name: "HTML5", pic: html },
      { name: "Gulp", pic: gulp },
      { name: "Git", pic: git },
      { name: "NPM", pic: npm },
      {name: "Gsap", pic: gsap},
      { name: "Bootstrap", pic: bootstrap },
    ],
    class: "technologies",
  },
  {
    title: "My work-useful soft skills:",
    list: [
      {
        name: "Good learning skills",
        desc:
          "I like to learn new things and, luckily, I am capable of doing so quickly. I believe being ready and eager to grow and develop is what keeps you in intellectual shape, and being in good intellectual shape is kind of my life goal.",
      },
      {
        name: "Being a teamworker",
        desc:
          "I value working in a team when everyone has their own tasks, but we have one common goal. This is why I am fond of agile methodologies - I participated in Scrum sprint once and I could see how efficient it was. In this kind of situation everyone brings something.",
      },
      {
        name: "Highly developed communication skills",
        desc:
          "I am good with both expressing myself and listening, so communicating with others has never be a problem for me. Also, I am doing well with nonverbal communication.",
      },
      {
        name: "Emotional intelligence",
        desc:
          "Having an ability to understand others is very useful in every workplace, and I do have it. I am an empathetic person, I believe that mental comfort is the thing you can not overestimate, so we should just look out for each other.",
      },
      {
        name: "Critical thinking",
        desc:
          "I have an analytical mind, so I have always been pretty good in problem solving. Since I like to have my responsibilities under control, I always do a research and try to be prepared as good as possible for anything I am going to do.",
      },
    ],
    class: "slider-prov",
  },
];

export default skills;
