import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    // docker,
    agiledrop,
    handyNotes,
    quizMania,
    restaurant,
    threejs,
    codeSnippets,
    webpack,
    nextjs,
    sass,
    stylelint,
    eslint,
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
        id: "projects",
        title: "Projects",
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
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [{
    name: "HTML 5",
    icon: html,
},
{
    name: "CSS 3",
    icon: css,
},
{
    name: "Sass",
    icon: sass,
},
{
    name: "JavaScript",
    icon: javascript,
},
{
    name: "React JS",
    icon: reactjs,
},
    // {
    //     name: "Next JS",
    //     icon: nextjs,
    // },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "Webpack",
    //     icon: webpack,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    // {
    //     name: "git",
    //     icon: git,
    // },
    // {
    //     name: "figma",
    //     icon: figma,
    // } 
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Agiledrop developer agency",
        icon: agiledrop,
        iconBg: "#383E56",
        date: "April 2022 - July 2023",
        points: [
            `Collaborated with an international team of developers and designers to build responsive web applications. Developed and implemented user interface components using HTML, CSS, and avaScript.`,
            `Developed and implemented user interface components using HTML, CSS, and JavaScript.`,
            `Implemented responsive design techniques to ensure optimal performance across various devices and screen sizes.`,
            `Worked closely with the backend development team to integrate frontend components with server-side logic.`,
            `Assisted in optimizing website performance by analyzing and addressing performance bottlenecks.`,
            `Collaborated with the UX/UI team to translate wireframes and mockups into functional web interfaces.`,
            `Stayed updated with the latest web technologies and industry trends to suggest improvements and implement new features.`
        ],
    }
];



const projects = [
    {
        name: "Code snippets",
        description:
            "Site made with Next.js 13 framework for creating code snippets. You can login with social account, save, edit and search snippets of code. For backend is used next-auth authentication and Mongo Db",
        tags: [
            {
                name: "next.js",
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
            {
                name: "next-auth",
                color: "blue-text-gradient",
            },
        ],
        image: codeSnippets,
        live_site_link: 'https://code-snippet-repository.vercel.app/',
        source_code_link: "https://github.com/kremsnita420/code-snippet-repository/",
    },
    {
        name: "Handy Notes",
        description:
            "Site made with React.js library for creating notes. You can login with social account or create new account with email and create, save or edit notes. For easier searching notes can be filtered by tags. For backend is used Clerk authentication, Mongo Db, NodeJS and Express",
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
            {
                name: "clerk-auth",
                color: "blue-text-gradient",
            },
        ],
        image: handyNotes,
        live_site_link: 'https://react-notes-client.vercel.app/',
        source_code_link: "https://github.com/kremsnita420/react-notes-client/",
    },
    {
        name: "Quiz mania",
        description:
            "Quiz app where you can select category, difficulty and number of questions. Questions data are then fetched from Open Trivia DB API endpoint. Quiz is timed based on a number of questions selected(30 seconds per question). Quiz progress is visible on a progress bar. Statistic is displayed at the end of quiz.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Open Trivia DB API",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            }

        ],
        image: quizMania,
        live_site_link: 'https://open-trivia-react-quiz.vercel.app/',
        source_code_link: "https://github.com/kremsnita420/open-trivia-react-quiz",
    },
    {
        name: "Restaurant website",
        description:
            "Restaurant website made with Next.js framework and it's translated in two languages with next-intl library. For backend is used Sanity headless CMS for managing food and drinks menu. It's fully responsive and SEO friendly.",
        tags: [
            {
                name: "next.js",
                color: "blue-text-gradient",
            },
            {
                name: "sanity-cms",
                color: "green-text-gradient",
            },
            {
                name: "next-intl",
                color: "pink-text-gradient",
            }

        ],
        image: restaurant,
        live_site_link: 'https://nextjs-restaurant-blond.vercel.app/',
        source_code_link: "https://vercel.com/kremsnita420/nextjs-restaurant",
    },

];

export { services, technologies, experiences, projects };