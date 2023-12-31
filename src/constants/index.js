import {
    mobile,
    developer,
    web,
    javascript,
    html,
    css,
    reactjs,
    sass,
    agiledrop,
    handyNotes,
    quizMania,
    restaurant,
    codeSnippets,
    moviesDb

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
        id: "tech",
        title: "Tech",
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
        title: "Frontend Developer",
        icon: html,
    },
    {
        title: "React Developer",
        icon: reactjs,
    },
    {
        title: "Javascript developer",
        icon: javascript,
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
    }
];

const techList = [
    "HTML 5",
    "CSS 3",
    "Sass",
    "JavaScript",
    "React JS",
    "Next JS",
    "MongoDB",
    "Node JS",
    "Tailwind CSS",
    "Material UI",
    "Webpack",
    "Three JS",
    "Git",
    "Github",
    "Npm",
    "Responsive design",
    "Figma",
    "a11y",
    "i18n",
    "OAuth"

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
        name: "Movies Database",
        description:
            "Website where you can search for movies, shows and actors. You can check movie/show's poster, cast, description, rating, trailers and related videos. On cast member page you can see their biography, location, birth and movies/shows that they appear in. All data is trough several API calls to TMDB API service ",
        tags: [
            {
                name: "next.js",
                color: "blue-text-gradient",
            }

        ],
        image: moviesDb,
        live_site_link: 'https://movie-db-tailwind.vercel.app/',
        source_code_link: "https://github.com/kremsnita420/movieDB-tailwind",
    },
    {
        name: "Restaurant website",
        description:
            "Restaurant website made with Next.js framework and it's translated in two languages with next-intl library. For backend is used Sanity headless CMS to manage food and drinks menus. It's fully responsive and SEO friendly.",
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


];

export { services, technologies, experiences, projects, techList };