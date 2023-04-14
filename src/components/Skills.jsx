import React, { useState } from "react";
import "./Skills.scss";

const Skills = ({ lang }) => {
    const [showIt, setShowIt] = useState(true);
    const skillList = [
        {
            icon: "🧙🏽‍♂️",
            description: { "en": "Javascript", "es": "Javascript" },
            progress: 80,
        },
        {
            icon: "⚛️",
            description: { "en": "React", "es": "React" },
            progress: 80,
        },
        {
            icon: "📄",
            description: { "en": "HTML", "es": "HTML" },
            progress: 80,
        },
        {
            icon: "🌸",
            description: { "en": "Css", "es": "Css" },
            progress: 80,
        },
        {
            icon: "🌺",
            description: { "en": "Sass", "es": "Sass" },
            progress: 80,
        },
        {
            icon: "🖥",
            description: { "en": "Node JS", "es": "Node JS" },
            progress: 80,
        },
        {
            icon: "🔢",
            description: { "en": "Math", "es": "Mátematicas" },
            progress: 80,
        },
        {
            icon: "🌎",
            description: { "en": "English", "es": "Inglés" },
            progress: 80,
        },
        {
            icon: "🤝",
            description: { "en": "Communication", "es": "Comunicación" },
            progress: 70,
        },
        {
            icon: "📖",
            description: { "en": "Reader", "es": "Lector" },
            progress: 70,
        },
        {
            icon: "⚡️",
            description: { "en": "Proactive", "es": "Proactivo" },
            progress: 70,
        },
        {
            icon: "💡",
            description: { "en": "Creative", "es": "Creativo" },
            progress: 70,
        },
        {
            icon: "💡",
            description: { "en": "Figma", "es": "Figma" },
            progress: 70,
        },
        {
            icon: "💡",
            description: { "en": "Linux", "es": "Linux" },
            progress: 70,
        },
        {
            icon: "💡",
            description: { "en": "Persistencia", "es": "Persistence" },
            progress: 70,
        },
        {
            icon: "💡",
            description: { "en": "Photoshop", "es": "Photoshop" },
            progress: 70,
        },
        {
            icon: "💡",
            description: { "en": "Pulcro", "es": "Neat" },
            progress: 70,
        },
    ];
    return (
        <section className="skills-container">
            {skillList.map((skill, index) => {
                if (showIt) {
                    if (index >= 10) {
                        return <></>;
                    } else {
                        return <div className="skill"><strong>{skill.icon}</strong>{skill.description[lang]}</div>;
                    }
                } else {
                    return <div className="skill"><strong>{skill.icon}</strong>{skill.description[lang]}</div>;
                }
            })}
            {<div
                className="skill" onClick={() => setShowIt(!showIt)}
                style={{ "opacity": "0.6", "cursor": "pointer" }}>
                <strong>{showIt ? "➕" : "➖"}</strong>
                {showIt
                    ? `${lang === "es" ? "mostrar más" : "show more"}`
                    : `${lang === "es" ? "mostrar menos" : "show less"}`}
            </div>}
        </section>
    );
}

export default Skills;