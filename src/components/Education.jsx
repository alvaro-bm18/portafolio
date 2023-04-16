import React from "react";
import "./Education.scss";

const Education = ({ lang }) => {
    return (
        <section id="education">
            <h1>📒 {lang === "es" ? "Educación" : "Education"}</h1>
            <div className="education-container">

            </div>
        </section>
    );
}

export default Education;