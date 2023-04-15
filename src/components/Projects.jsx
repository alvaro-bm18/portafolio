import React from "react";
import "./Projects.scss";
import GallerySS from "./GallerySS";

const Projects = ({ lang }) => {
    const projectsInfo = [
        {
            title: "Hangman",
            tech: ["Javascript", "Css", "Html"],
            description: {
                "es": "Hangman, juego donde debes adivinar una palabra con un limitado numero de intentos, la dificulad del juego depende del numero de letras a adivinar.",
                "en": "Hangman, game where you most guess a word with a limited number of attemps, the difficulty of game depends of number of letters to guess."
            },
            link: "https://github.com/alvaro-bm18/hangman-game",
            cover: "https://raw.githubusercontent.com/alvaro-bm18/hangman-game/master/assets/cover.png",
            screenshots: [
                "https://raw.githubusercontent.com/alvaro-bm18/hangman-game/master/assets/message.png",
                "https://raw.githubusercontent.com/alvaro-bm18/hangman-game/master/assets/demo.png",
                "https://raw.githubusercontent.com/alvaro-bm18/hangman-game/master/assets/cover.png"
            ],
        },
        {
            title: "GATO",
            tech: ["javascript", "css", "html"],
            description: {
                "es": "Gato, juego con dos modos de jugar, jugador contra cpu y jugador contra jugador, el primero en hacer tres fichas gana la ronda.",
                "en": "Gato, game with two ways to play, player vs cpu and player vs player, the first one to make tree in line winn the match."
            },
            cover: "https://raw.githubusercontent.com/alvaro-bm18/gato/master/screenshots/GATO-cover.png",
            screenshots: [
                "https://raw.githubusercontent.com/alvaro-bm18/gato/master/screenshots/GATO-cover.png",
                "https://raw.githubusercontent.com/alvaro-bm18/gato/master/screenshots/GATO-game.png",
                "https://raw.githubusercontent.com/alvaro-bm18/gato/master/screenshots/GATO-winner.png"
            ]
        }
    ];
    return (
        <section id="projects">
            <h1>📁 {lang === "es" ? "Proyectos" : "Projects"}</h1>
            <div className="project-container">
                {projectsInfo.map((project, index) => {
                    return <div className="project" key={`pj-${index}`}>
                        <div
                            className="cover-projects"
                            style={{ "backgroundImage": `url(${project.cover})` }}></div>
                        <h2>{project.title}</h2>
                        <p className="desc-project">☑️ {project.description["es"]}</p>
                        <div className="tech-tags">
                            {project.tech.map((techSkill, ind) => <p><strong>{techSkill}</strong>{ind === (project.tech.length - 1) ? '' : ' 🔹 '}</p>)}
                        </div>
                        <div className="links-project">
                            <p>🔗 <a href={project.link}>{project.title}</a></p>
                        </div>
                        <GallerySS screenshots={project.screenshots} />
                    </div>;
                })}
            </div>
        </section>
    );
}

export default Projects;