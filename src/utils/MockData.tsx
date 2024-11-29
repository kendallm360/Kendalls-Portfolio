import css3 from "../images/skill_logos/css-3.png";
/*
import chai from "../images/skill_logos/chai.png";
import circle from "../images/skill_logos/circleO.png";
import cypress from "../images/skill_logos/cypress.jpeg";
import zustand from "../images/skill_logos/zustand.jpeg";
import nextauth from "../images/skill_logos/nextauth.jpeg";
*/
import dribbble from "../images/skill_logos/dribbble3.png";
import eslint from "../images/skill_logos/eslint.png";
import figma from "../images/skill_logos/figma3.png";
import git from "../images/skill_logos/git2.png";
import github from "../images/skill_logos/githubO.png";
//import heroku from "../images/skill_logos/heroku.png";
import html5 from "../images/skill_logos/html-5.png";
//import jest from "../images/skill_logos/jest.png";
import js from "../images/skill_logos/js.png";
//import markdown from "../images/skill_logos/mdO.png";
//import mocha from "../images/skill_logos/mocha2.png";
import next from "../images/skill_logos/nextO.png";
import npm from "../images/skill_logos/npm2.png";
import postman from "../images/skill_logos/postman2.png";
import react from "../images/skill_logos/physics.png";
//import router from "../images/skill_logos/react-router.png";
import sass from "../images/skill_logos/sass.png";
//import tailwind from "../images/skill_logos/tailwind.png";
import jwt from "../images/skill_logos/jwt.png";
import vercel from "../images/skill_logos/vercel.png";
//import axios from "../images/skill_logos/axios.png";
import mongodb from "../images/skill_logos/mongodb.png";
/*
import smartTechLogo from "../images/smartTechSS.png";
import styledComponents from "../images/skill_logos/styled-components.png";
*/
import typescript from "../images/skill_logos/typescript.png";
import portfolioSS from "../images/SSportfolio.png";
import bjj from "../images/bjj.jpg";
import firstHome from "../images/firstHome.jpg";
import towerBuild from "../images/tower.jpg";
import msc from "../images/mscSS.png";
//import cocktail from "../images/cocktail2.png";

export const mySkills = [
  {
    id: 0,
    name: "Next.js",
    alt: "Next logo",
    logo: next,
  },
  {
    id: 1,
    name: "TypeScript",
    alt: "TS logo",
    logo: typescript,
  },
  {
    id: 2,
    name: "React",
    alt: "React logo",
    logo: react,
  },
  {
    id: 3,
    name: "JavaScript",
    alt: "JS logo",
    logo: js,
  },
  {
    id: 4,
    name: "HTML5",
    alt: "HTML logo",
    logo: html5,
  },
  /*
  {
    id: 5,
    name: "Tailwind CSS",
    alt: "Tailwind logo",
    logo: tailwind,
  },
  */
  {
    id: 6,
    name: "SASS",
    alt: "SASS logo",
    logo: sass,
  },
  {
    id: 7,
    name: "CSS3",
    alt: "CSS3 logo",
    logo: css3,
  },
  /*
  {
    id: 8,
    name: "Styled Components",
    alt: "Styled Components logo",
    logo: styledComponents,
  },
  {
    id: 9,
    name: "Cypress",
    alt: "Cypress logo",
    logo: cypress,
  },
  {
    id: 10,
    name: "Jest",
    alt: "Jest logo",
    logo: jest,
  },
  {
    id: 11,
    name: "Mocha",
    alt: "Mocha logo",
    logo: mocha,
  },
  {
    id: 12,
    name: "Chai",
    alt: "Chai logo",
    logo: chai,
  },
  */
  {
    id: 13,
    name: "JWT",
    alt: "JWT logo",
    logo: jwt,
  },
  /*
  {
    id: 14,
    name: "Axios",
    alt: "axios logo",
    logo: axios,
  },
  {
    id: 15,
    name: "Zustand",
    alt: "zustand logo",
    logo: zustand,
  },
  {
    id: 16,
    name: "NextAuth",
    alt: "NextAuth logo",
    logo: nextauth,
  },
  */
  {
    id: 17,
    name: "MongoDB",
    alt: "MongoDB logo",
    logo: mongodb,
  },
  /*
  {
    id: 18,
    name: "React Router",
    alt: "Router logo",
    logo: router,
  },
  */
  {
    id: 19,
    name: "Github",
    alt: "Github logo",
    logo: github,
  },
  /*
  {
    id: 20,
    name: "Circle Ci",
    alt: "Circle logo",
    logo: circle,
  },
  */
  {
    id: 21,
    name: "ESLint",
    alt: "ESLint logo",
    logo: eslint,
  },
  {
    id: 22,
    name: "Git",
    alt: "GIT logo",
    logo: git,
  },
  {
    id: 23,
    name: "Dribbble",
    alt: "dribble logo",
    logo: dribbble,
  },
  {
    id: 24,
    name: "Figma",
    alt: "figma logo",
    logo: figma,
  },
  {
    id: 25,
    name: "Postman",
    alt: "Postman logo",
    logo: postman,
  },
  {
    id: 26,
    name: "NPM",
    alt: "NPM logo",
    logo: npm,
  },
  /*
  {
    id: 27,
    name: "Markdown",
    alt: "Markdown logo",
    logo: markdown,
  },
  {
    id: 28,
    name: "Heroku",
    alt: "Heroku logo",
    logo: heroku,
  },
  */
  {
    id: 29,
    name: "Vercel",
    alt: "Vercel logo",
    logo: vercel,
  },
];

export const latestProjects = [
  {
    id: 1,
    name: "Movie Social Club",
    logo: msc,
    //ADD THIS SOMEWHERE BELOW
    //CURRENTLY UNDER CONSTRUCTION. EXPECTED RELAUNCH FEBRUARY 1, 2025:
    description:
      "A solo fullstack website. I used this project to showcase all that I have self taught in terms of Next.js, Prisma, MongoDB, Axios, and Zustand. The app allows users to gain insight on current movies, see curated movie suggestions, leave reviews, and manage watch and favorite lists.",
    topTechnologies: ["Next.js", "TypeScript"],
    repoLink: "https://github.com/Movie-Social/movie-social",
    deployedLink: "https://movie-social-club.vercel.app/auth",
  },
  {
    id: 2,
    name: "My Portfolio (this site)",
    logo: portfolioSS,
    description:
      "This portfolio because everyone needs a portfolio. I used this project to self-teach Sass and showcase some of my styling abilities. Checkout the repo for this site below.",
    topTechnologies: ["SASS", "React"],
    repoLink: "https://github.com/kendallm360/Kendalls-Portfolio",
    deployedLink: "https://kendalls-portfolio.vercel.app/",
  },
  /*
  {
    id: 3,
    name: "Smart Tech",
    logo: smartTechLogo,
    description:
      "An e-commerce website built to showcase all I've learned so far studying frontend engineering. The application is responsive across multiple breakpoints, E2E tested, fully accessible, and was continuously integrated & deployed. Global state management and user error handling was utilized throughout.",
    topTechnologies: ["React", "TypeScript"],
    repoLink: "https://github.com/kendallm360/smart-tech",
    deployedLink: "https://smart-tech-c9yjukahg-kendallm360.vercel.app/",
  },
  {
    id: 4,
    name: "CockTail Lounge",
    logo: cocktail,
    description:
      "A group project used to self-teach TypeScript in a collaborative environment. We also used the project to demonstrate a deep understanding of API consumption and E2E testing. The application gives the user the option to choose a cocktail from available categories or be suggested 4 different drinks at random.",
    topTechnologies: ["TypeScript", "React"],
    repoLink: "https://github.com/kendallm360/cocktail-lounge",
    deployedLink: "https://cocktail-lounge-jqhnunkrf-kendallm360.vercel.app/",
  },
  */
];

export const funFacts = [
  {
    id: 0,
    fact: "I Suck At Super Smash Bros",
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
    fact: "Music Gets Me Going",
    image: "https://media.giphy.com/media/l0HlFTlbKx9KMZC5q/giphy.gif",
    imageAlt: "Man jamming out on the job whilst remaining productive",
  },
  {
    id: 3,
    fact: "I Never Run Out Of Cranberry Juice",
    image: "https://media.giphy.com/media/7sLtuxs1yWFd498IOS/giphy.gif",
    imageAlt: "A cranberry juice bath celebration",
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
  {
    id: 7,
    fact: "I'm an avid Hiker",
    image: "https://media.giphy.com/media/3oxRmGNqKwCzJ0AwPC/giphy.gif",
    imageAlt: "Man falling into stream while hiking. #fail",
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
    title: "Basketball (defense only) 🏀",
    image: "https://media.giphy.com/media/vzE7csLWN3uRW/giphy.gif",
    imageAlt: "Mean man blocking a child's layup",
  },
  {
    id: 5,
    title: "Cooking 👨🏾‍🍳",
    image: "https://media.giphy.com/media/LRrHCZYvcKukTi3ayH/giphy.gif",
    imageAlt: "Ed seasoning the food from the movie Good Burger",
  },
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
    description: "Building a better future for my family.",
    image: firstHome,
    imageAlt: "Kendall buying his first home",
  },
];
