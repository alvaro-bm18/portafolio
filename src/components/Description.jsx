import React from "react";
import "./Description.scss";

const Description = ({ lang }) => {
    return (
        <section className="description">
            <p>{lang === "es"
                ? "Desarrollador front-end 🔸 Ciencias Computacionales 🔸 Diseñador UX/UI 🚀"
                : "Front-end Developer 🔸 Computer Science 🔸 UX/UI Designer 🚀"}</p>
            <p>{lang === "es"
                ? "Enfocado en mi desarrollo personal y profecional, todos los dias pretendo ser mejor que ayer 🌵"
                : "I'm focus on my personal and professional developent, every day I pretend to be better than yesterday 🌵"}</p>
            <p>{
                lang === "es"
                ? "Una de mis metas a futuro es desarrollar la tecnología necesaria para tener un impacto en contra del calentamiento global 🌎"
                : "One of my future goals is to develop the necessary technology to have an impact against the global warming 🌎"
                }</p>
        </section>
    );
}

export default Description;