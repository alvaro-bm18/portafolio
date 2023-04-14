import React from "react";
import "./Projects.scss";

const Projects = ({lang}) => {
    const projectsInfo = [
        {
            title: "Hangman",
            tech: ["javascript", "css", "html"],
            description: {
                "es" : "Hangman, juego donde debes adivinar una palabra con un limitado numero de intentos, la dificulad del juego depende del numero de letras a adivinar.",
                "en" : "Hangman, game where you most guess a word with a limited number of attemps, the difficulty of game depends of number of letters to guess."
            },
            link: "https://github.com/alvaro-bm18/hangman-game",
            cover: "",
            screenshots: [],
        }
    ];
    return(
        <section id="projects">
            <h1>📁 {lang === "es" ? "Proyectos" : "Projects"}</h1>
        </section>
    );
}

export default Projects;