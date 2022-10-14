import { DataType } from "./types";
const data: DataType = {
  navBar: {
    button: {
      text: "Resume",
      target: "",
    },
    items: [
      {
        text: "About",
        target: "#about",
      },
      {
        text: "Experience",
        target: "#experience",
      },
      {
        text: "Projects",
        target: "#projects",
      },
      {
        text: "Activity",
        target: "#activity",
      },
      {
        text: "Contact",
        target: "#contact",
      },
    ],
  },
  sectionOne: {
    id: "",
    badge: "Hi, my name is",
    name: "Abolfazl Abdali",
    slogan: "I build things for the web",
    desc: "I’m a Front-End developer specializing in building single page web applications.",
    button: {
      text: "Check my resume",
      target: "/abolfazl-resume.pdf",
    },
  },
  social: {
    github: "https://github.com/abdalicodes",
    instagram: "",
    twitter: "",
    linkedin: "",
    codepen: "",
  },
  email: "abolfazlabdali0@gmail.com",
  sectionAboutMe: {
    show: true,
    id: "about",
    title: "About Me",
    desc: `<p>Hello! I'm a Self-taught and self-motivated Front-end developer with unlimited creativity, innovation and passion for designing and developing web applications. Worked as a WordPress developer for a long time. With more than 4 years of experience in web development and almost 2 years in React.</p> <p>Here are a few technologies I’ve been working with recently:</p>`,
    list: ["JavaScript", "TypeScript", "React", "Next.Js", "CSS", "Redux"],
    picture: "/me.jpg",
  },
  sectionWork: {
    show: true,
    title: "Where I’ve Worked",
    id: "experience",
    tabs: [
      // {
      //   tabName: "Front-End Developer",
      //   content: {
      //     title: "Front-End developer Next.js",
      //     company: { name: "Almas", link: "#" },
      //     date: "May 2022 - July 2022 . 2 mos",
      //     contentList: [
      //       "I built an awesome UI for a marketplace where sellers could add their products to the market",
      //       "Handle interactive features like Drag & Drop for most parts of the dashboard and image inputs for 3D images",
      //       "We used GraphQL, Next.js, and Redux in Almas.",
      //     ],
      //   },
      // },
      // {
      //   tabName: "JavaScript Developer",
      //   content: {
      //     title: "JavaScript Developer",
      //     company: { name: "Freelance", link: "#" },
      //     date: "Mar 2021 - Apr 2022 . 1 yr 2 mos",
      //     contentList: [
      //       "Work with most common React ecosystem technologies, including Redux, Next.js, etc.",
      //       "Build stateful web applications",
      //       "Work elegantly with styling libraries and tools ",
      //     ],
      //   },
      // },
      // {
      //   tabName: "Wordpress Developer",
      //   content: {
      //     title: "WordPress developer",
      //     company: { name: "Freelance", link: "#" },
      //     date: "Jan 2018 - Aug 2020 . 2 yr 8 mos",
      //     contentList: [
      //       "Build E-commerce websites with WordPress CMS and WooCommerce plugin.",
      //       "Work closely with the WordPress core API, e.g., built-in hooks.",
      //       "Edit and build WordPress themes using PHP and CSS.",
      //     ],
      //   },
      // },
    ],
  },
  sectionProjects: {
    show: true,
    id: "projects",
    title: "Some Things I’ve Built",
    projects: [
      {
        image: "/spotify.jpg",
        badge: "Featured Project",
        title: "Spotify clone",
        description:
          "A Spotify-like music app built according to Spotify's redesign with React.js",
        tags: ["React", "Material UI", "React Query"],
        link: "https://spotify-ab.netlify.app/",
        github: "https://github.com/abdalicodes/spotify",
        direction: "rtl",
      },
      {
        image: "/abdalia.jpg",
        badge: "Featured Project",
        title: "Next.js Portfolio",
        description: "A personal website built with Next.js and Framer Motion",
        tags: ["Next.js", "TypeScript", "SASS", "Framer Motion"],
        link: "https://abdalia.ir",
        github: "https://github.com/abdalicodes/next-portfolio",
        direction: "ltr",
      },
      {
        image: "/coinbase.jpg",
        badge: "Featured project",
        title: "Coinbase UI",
        description: "The Coinbase clone app uses React and the Chakra-UI kit.",
        tags: ["React", "Chakra-UI"],
        link: "https://abdalicodes.github.io/coinbase-react/",
        github: "https://github.com/abdalicodes/coinbase-react",
        direction: "rtl",
      },
    ],
  },
  sectionMoreProjects: {
    id: "",
    show: true,
    title: "Other Noteworthy Projects",
    projects: [
      {
        title: "Go Movies",
        description: "Show movies and series information",
        tags: ["React", "SASS"],
        link: "https://gomovies-2021.web.app/",
        github: "https://github.com/abdalicodes/GoMovies",
      },
      {
        title: "RUNO",
        description: "Minimal SSR blog",
        tags: ["Next.JS", "Graph QL", "Tailwind"],
        link: "https://nextjs-blog-simple.herokuapp.com/",
        github: "https://github.com/abdalicodes/nextjs-graphql",
      },
      {
        title: "Netflix Clone",
        description: "This is my very first React app that looks like Netflix",
        tags: ["React"],
        link: "https://netflix-clone-22d53.web.app/",
        github: "https://github.com/abdalicodes/netflix-clone",
      },
    ],
  },
  sectionContact: {
    show: true,
    id: "contact",
    badge: "05. What's Next?",
    title: "Get In Touch",
    description:
      "My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
    buttons: [
      {
        text: "📩 Send Email",
        target: "mailto:abolfazlabdali0@gmail.com",
      },
      {
        text: `📞 WhatsApp`,
        target:
          "https://api.whatsapp.com/send/?phone=989390623327&text=Hello+Abolfazl%21+I%27ve+reached+you+through+your+personal+website.&app_absent=0",
      },
    ],
  },
  sectionCodingActivity: {
    title: "Coding Activity",
    id: "activity",
    number: 4,
    src: [
      "https://wakatime.com/share/@6d1942db-fe72-4cf8-bdae-485d39b2c16a/403afa8b-ac5c-4205-aa98-d7684d38b7eb.svg",
      "https://wakatime.com/share/@6d1942db-fe72-4cf8-bdae-485d39b2c16a/0f4586fa-7045-4a34-abc1-8e9bc6ffc662.svg",
    ],
  },
};

export const {
  sectionContact,
  navBar,
  email,
  social,
  sectionOne,
  sectionAboutMe,
  sectionWork,
  sectionProjects,
  sectionMoreProjects,
  sectionCodingActivity,
} = data;
export default data;
