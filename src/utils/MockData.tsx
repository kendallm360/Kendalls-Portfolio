import css3 from "../images/skill_logos/css-3.png";
import chai from "../images/skill_logos/chai.png";
import circle from "../images/skill_logos/circleO.png";
import cypress from "../images/skill_logos/cypress.jpeg";
import dribbble from "../images/skill_logos/dribbble3.png";
import eslint from "../images/skill_logos/eslint.png";
import figma from "../images/skill_logos/figma3.png";
import git from "../images/skill_logos/git2.png";
import github from "../images/skill_logos/githubO.png";
import heroku from "../images/skill_logos/heroku.png";
import html5 from "../images/skill_logos/html-5.png";
import jest from "../images/skill_logos/jest.png";
import js from "../images/skill_logos/js.png";
import markdown from "../images/skill_logos/mdO.png";
import mocha from "../images/skill_logos/mocha2.png";
import next from "../images/skill_logos/nextO.png";
import npm from "../images/skill_logos/npm2.png";
import react from "../images/skill_logos/physics.png";
import postman from "../images/skill_logos/postman2.png";
import router from "../images/skill_logos/react-router.png";
import sass from "../images/skill_logos/sass.png";
import smartTechLogo from "../images/smartTechSS.png";
import styledComponents from "../images/skill_logos/styled-components.png";
import typescript from "../images/skill_logos/typescript.png";
import portfolioSS from "../images/portfolioSS.png";
import bjj from "../images/bjj.jpg";
import firstHome from "../images/firstHome.jpg";
import towerBuild from "../images/tower.jpg";

export const mySkills = [
  {
    id: 1,
    name: "TypeScript",
    alt: "logo",
    logo: typescript,
  },
  {
    id: 2,
    name: "React",
    alt: "logo",
    logo: react,
  },
  {
    id: 3,
    name: "JavaScript",
    alt: "logo",
    logo: js,
  },
  {
    id: 4,
    name: "HTML5",
    alt: "logo",
    logo: html5,
  },
  {
    id: 6,
    name: "SASS",
    alt: "logo",
    logo: sass,
  },
  {
    id: 5,
    name: "CSS3",
    alt: "logo",
    logo: css3,
  },
  {
    id: 14,
    name: "Styled Components",
    alt: "logo",
    logo: styledComponents,
  },
  {
    id: 7,
    name: "Cypress",
    alt: "logo",
    logo: cypress,
  },
  {
    id: 10,
    name: "Jest",
    alt: "logo",
    logo: jest,
  },
  {
    id: 8,
    name: "Mocha",
    alt: "logo",
    logo: mocha,
  },
  {
    id: 9,
    name: "Chai",
    alt: "logo",
    logo: chai,
  },
  {
    id: 13,
    name: "React Router",
    alt: "logo",
    logo: router,
  },
  {
    id: 16,
    name: "Github",
    alt: "logo",
    logo: github,
  },
  {
    id: 15,
    name: "Circle Ci",
    alt: "logo",
    logo: circle,
  },
  {
    id: 11,
    name: "Next.js",
    alt: "logo",
    logo: next,
  },
  {
    id: 18,
    name: "ESLint",
    alt: "logo",
    logo: eslint,
  },
  {
    id: 17,
    name: "Git",
    alt: "logo",
    logo: git,
  },
  {
    id: 20,
    name: "Dribbble",
    alt: "logo",
    logo: dribbble,
  },
  {
    id: 21,
    name: "Figma",
    alt: "logo",
    logo: figma,
  },
  {
    id: 22,
    name: "Postman",
    alt: "logo",
    logo: postman,
  },
  {
    id: 23,
    name: "NPM",
    alt: "logo",
    logo: npm,
  },
  {
    id: 12,
    name: "Markdown",
    alt: "logo",
    logo: markdown,
  },
  {
    id: 19,
    name: "Heroku",
    alt: "logo",
    logo: heroku,
  },
];

export const latestProjects = [
  {
    id: 1,
    name: "Smart Tech",
    logo: smartTechLogo,
    description:
      "An e-commerce website built to showcase all of the skills that I've acquired while learning frontend engineering. Users have the ability to add/remove items from a shopping cart, sort items by multiple criteria, view items by category, and independently. The website is responsive across multiple screen sizes, E2E tested, fully accessible, continuously integrated, and includes user error handling.",
    topTechnologies: ["React", "TypeScript"],
    repoLink: "https://github.com/kendallm360/smart-tech",
    deployedLink: "https://smart-tech-c9yjukahg-kendallm360.vercel.app/",
  },

  {
    id: 2,
    name: "My Portfolio (this site)",
    logo: portfolioSS,
    description:
      "This portfolio because everyone needs one of those. In past projects styling was something that I did not spend much time as I was more concerned with learning the fundamentals of JavaScript and React. Now that I have become more comfortable with the code I have fallen in love with CSS. I used this project to both learn Sass and showcase some of my styling abilities. Checkout the repo for this site below.",
    topTechnologies: ["React", "SASS"],
    repoLink: "https://github.com/kendallm360/Kendalls-Portfolio",
    deployedLink: "",
  },
];

export const funFacts = [
  {
    id: 0,
    fact: "Im Really Bad At Super Smash Bros",
    image: "https://media.giphy.com/media/28hH1I85TCZosy5zus/giphy.gif",
    imageAlt: "Mario vs Pikachu Super Smash Brothers",
  },
  {
    id: 1,
    fact: "I Love Komodo Dragons",
    image: "https://media.giphy.com/media/3oEjI9ygZAmuVO6AJW/giphy.gif",
    imageAlt: "Komodo Dragons hugging each other",
  },
  {
    id: 2,
    fact: "I Love Listening To Music",
    image: "https://media.giphy.com/media/l0HlFTlbKx9KMZC5q/giphy.gif",
    imageAlt: "Man jamming out on the job whilst remaining productive",
  },
  {
    id: 3,
    fact: "I Never Run Out Of Cranberry Juice",
    image: "https://media.giphy.com/media/1ZZ8M9SCBP0s6HNweK/giphy.gif",
    imageAlt: "A semi-literal ocean spray of cranberry juice",
  },
  {
    id: 4,
    fact: "I Want The Best For You",
    image: "https://media.giphy.com/media/1iTX9tGRTTTVZb7q/giphy.gif",
    imageAlt: "Passionately cheering (America's Got Talent clip)",
  },
  {
    id: 5,
    fact: "Cupcakes Are Not Safe Around Me",
    image: "https://media.giphy.com/media/QmEUZ8J1MRghVq1GRs/giphy.gif",
    imageAlt: "A Chad bro loving cupcakes",
  },
  {
    id: 6,
    fact: "I Hate Bullying",
    image:
      "https://media.giphy.com/media/SwDNCeOaRmbKYOvrDH/giphy-downsized-large.gif",
    imageAlt: "Bullies suck",
  },
];

export const alternateSkills = [
  {
    id: 0,
    title: "Chess ♟️",
    image: "https://media.giphy.com/media/3o7ZetM6sGM1402sg0/giphy.gif",
    imageAlt: "Happily taking a chess piece midmatch",
  },
  {
    id: 1,
    title: "Movie Trivia 🎥",
    image: "https://media.giphy.com/media/dXFSYoJMQntb3Pe6CV/giphy.gif",
    imageAlt: "Snooty movie buff claiming to enjoy cinema",
  },
  {
    id: 2,
    title: "Brazilian Jiu-Jitsu 🥋",
    image: bjj,
    imageAlt: "Me winning a jiu-jitsu match",
  },
  {
    id: 3,
    title: "Investing in Innovation 🚀",
    image: "https://media.giphy.com/media/524L7nbZSgvdv4woq0/giphy.gif",
    imageAlt: "Kyle Massey joining the investment game",
  },
  {
    id: 4,
    title: "Basketball (defense only)",
    image: "https://media.giphy.com/media/vzE7csLWN3uRW/giphy.gif",
    imageAlt: "Mean man blocking a child's layup",
  },
  {
    id: 5,
    title: "Cooking",
    image: "https://media.giphy.com/media/LRrHCZYvcKukTi3ayH/giphy.gif",
    imageAlt: "Ed seasoning the food from the movie Good Burger",
  },
  // {
  //   id: 6,
  //   title: "",
  //   image: "",
  //   imageAlt: "",
  // }
];

export const myBuilds = [
  {
    id: 0,
    description:
      "I supervised the build of this cell phone tower in Oneonta, New York. Unfortunately, I helped build many more towers in extremely cold places 😭",
    image: towerBuild,
    imageAlt: "350 foot tower that Kendall helped build",
  },
  {
    id: 1,
    description: "I am helping build a better future for my family.",
    image: firstHome,
    imageAlt: "Kendall buying my first home",
  },
];
