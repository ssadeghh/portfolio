const experiences = [
    {
        title: "Metaversus Front-End",
        company_name: "Metaversus link",
        link: "http://Metavs.netlify.app",
        icon: 'meta.png',
        iconBg: "#383E56",
        date: "Metaversus Front-End",
        points: [
            "This project has been created with ReactJS and other libraries like Framer Motion to have nice animations/motions. It has some beautiful images.",
            'In the middle of the page, you will find "Choose the world you want to explore." You can click on each world and check them out.',
        ],
        showLink: "If you want to visit the website, you can click on the link above."
    },
    {
        title: "Instagram React App",
        company_name: "Instagram link",
        link: "https://reactsocialbook.netlify.app/",
        icon: "instagram.png",
        iconBg: "#383E56",
        date: "Instagram React App",
        points: [
            "It's a simple React application that simulates Instagram. It has Dark mode and light mode, and you can select them in the profile section.",
        ],
        showLink: "If you want to visit the website, you can click on the link above."
    },
    {
        title: "Shirt 3D Model",
        company_name: "Shirt 3D Model",
        link: "http://shirtds.netlify.app",
        icon: "design.png",
        iconBg: "#E6DEDD",
        date: "Shirt 3D Model",
        points: [
            "This project has been created with ReactJS and other libraries like Framer Motion to have nice animations/motions.",
            "You can change the color of the 3D model shirt with millions of different colors and also modify the shirt's logo by putting your own logo instead..",
            "At the end, you can ask AI to create a logo for you. That's so amazing.",
        ],
        showLink: "If you want to visit the website, you can click on the link above."
    },
];

const projects = [
    {
        name: "Car Rent",
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
        // image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
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
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        // image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        // image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { experiences, projects };