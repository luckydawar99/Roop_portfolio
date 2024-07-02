import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ecommerce,
  gym,
  bookstore,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "React js Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN STACK Developer",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Feb 2024",
    points: [
      "Passionate React.js developer with expertise in crafting dynamic, responsive web applications. Proficient in JSX, hooks",
      " and state management, with strong skills in Context API, React Router, and tools like Webpack and Babel.",
      " Dedicated to writing clean code, embracing best practices, and staying updated with the latest in the React ecosystem.",
    ],
  },
  /*{
    title: "Web Developer",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2023 - Aug 2024",
    points: [
      "Experienced web developer with a focus on creating polished and user-friendly websites",
      "Proficient in front-end technologies like HTML, CSS, JavaScript (including React.js), and skilled in back-end frameworks such as Node.js and Express",
      " Strong in database management (MongoDB, SQL), RESTful API development, and adept with Git for version control",
      " Committed to delivering exceptional web experiences through innovation and effective communication"
    ],
  },*/
  {
    title: "Full stack Developer",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "july 2023 - Present",
    points: [
       "Experienced full stack developer adept at building robust web applications using React.js, Node.js, and Express", 
       "Skilled in MongoDB, SQL, RESTful APIs, and Git. Strong emphasis on clean code, best practices, and continuous learning", 
       "Excellent communication skills, collaborating effectively across teams to deliver high-quality solutions"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shopify",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:ecommerce,
    source_code_link: "https://github.com/luckydawar99/Ecommerce.git",
    source_link:"https://roopecommers.netlify.app/"
  },
  {
    name: "Indian-Gym",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://github.com/luckydawar99/Gym-web.git",
    source_link:"https://roopgym.netlify.app/"
  },
  {
    name: "Bookstore",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/luckydawar99/bookstore.git",
    source_link:"https://roopbookstore.netlify.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
