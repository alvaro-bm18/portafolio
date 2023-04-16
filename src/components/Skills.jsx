import React, { useState } from "react";
import skillList from "./abilities.js";
import "./Skills.scss";

const Skills = ({ lang }) => {
    const [showIt, setShowIt] = useState(true);
    return (
        <section className="skills-container">
            <h1>{lang === "es" ? "Habilidades" : "Skills"}</h1>
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