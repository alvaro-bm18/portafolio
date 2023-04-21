import React, { useState } from "react";
import skillList from "./skills.js";
import "./Skills.scss";

import keyG from "./keyG.js";

const Skills = ({ lang, theme }) => {
    const [showIt, setShowIt] = useState(true);
    return (
        <section className="skills-container">
            <h1>{lang === "es" ? "Habilidades" : "Skills"}</h1>
            {skillList.map((skill, index) => {
                if (showIt && index >= Math.floor(skillList.length / 2)) {
                    return <></>;
                }

                return (<div className={`skill skll-${theme}`} key={keyG()}>
                    <strong>{skill.icon}</strong>{skill.description[lang]}
                </div>);
            })}
            <div
                className={`skill skll-${theme}`}
                onClick={() => setShowIt(!showIt)}
                style={{ "opacity": "0.6", "cursor": "pointer" }}>
                <strong>{showIt ? "➕" : "➖"}</strong>
                {showIt
                    ? `${lang === "es" ? "mostrar más" : "show more"}`
                    : `${lang === "es" ? "mostrar menos" : "show less"}`}
            </div>
        </section>
    );
}

export default Skills;