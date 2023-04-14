import React from "react";

const Skills = ({ lang }) => {
    const skillList = [
        {
            icon: "🧑🏽‍💻",
            description: { "en": "Javascript", "es": "Javascript" },
            progress: 80,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "React", "es": "React" },
            progress: 80,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "HTML", "es": "HTML" },
            progress: 80,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "Css", "es": "Css" },
            progress: 80,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "Sass", "es": "Sass" },
            progress: 80,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "Node JS", "es": "Node JS" },
            progress: 80,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "Math", "es": "Mátematicas" },
            progress: 80,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "English", "es": "Inglés" },
            progress: 80,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "Communication", "es": "Comunicación" },
            progress: 70,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "Reader", "es": "Lector" },
            progress: 70,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "Proactive", "es": "Proactivo" },
            progress: 70,
        },
        {
            icon: "🧑🏽‍💻",
            description: { "en": "Creative", "es": "Creativo" },
            progress: 70,
        },
    ];
    return (
        <section>
            {skillList.map(skill => <div className="skill"><strong>{skill.icon}</strong><p>{skill.description[lang]}</p></div>)}
        </section>
    );
}

export default Skills;