import React, { useState } from "react";
import "./Projects.scss";
import GallerySS from "./GallerySS";

const Projects = ({ lang }) => {
    const [expand, setExpand] = useState(true);
    const projectsInfo = [
        {
            title: "Post-it-wall",
            tech: ["react", "express js", "node js", "javascript", "scss", "mongodb"],
            description: {
                "es": "Gato, juego con dos modos de jugar, jugador contra cpu y jugador contra jugador, el primero en hacer tres fichas gana la ronda.",
                "en": "Gato, game with two ways to play, player vs cpu and player vs player, the first one to make tree in line winn the match."
            },
            link: "https://github.com/alvaro-bm18/post-it-wall",
            screenshots: [
                "https://raw.githubusercontent.com/alvaro-bm18/post-it-wall/master/screenshots/PostItWall_cover.png",
                "https://raw.githubusercontent.com/alvaro-bm18/post-it-wall/master/screenshots/PostItWall_interface1.png",
                "https://raw.githubusercontent.com/alvaro-bm18/post-it-wall/master/screenshots/PostItWall_interface2.png"
            ]
        },
        {
            title: "Generador de contraseñas",
            tech: ["react", "javascript", "scss"],
            description: {
                "es": "Gato, juego con dos modos de jugar, jugador contra cpu y jugador contra jugador, el primero en hacer tres fichas gana la ronda.",
                "en": "Gato, game with two ways to play, player vs cpu and player vs player, the first one to make tree in line winn the match."
            },
            link: "https://github.com/alvaro-bm18/generador-de-contrasenia",
            screenshots: [
                "https://raw.githubusercontent.com/alvaro-bm18/generador-de-contrasenia/master/screenshot/GEN_PASS_cover.png",
                "https://raw.githubusercontent.com/alvaro-bm18/generador-de-contrasenia/master/screenshot/GEN_PASS_interface.png",
                "https://raw.githubusercontent.com/alvaro-bm18/generador-de-contrasenia/master/screenshot/GEN_PASS_interface2.png"
            ]
        },
        {
            title: "template-blog-react",
            tech: ["react", "javascript", "scss"],
            description: {
                "es": "Gato, juego con dos modos de jugar, jugador contra cpu y jugador contra jugador, el primero en hacer tres fichas gana la ronda.",
                "en": "Gato, game with two ways to play, player vs cpu and player vs player, the first one to make tree in line winn the match."
            },
            link: "https://github.com/alvaro-bm18/template-blog-react",
            screenshots: [
                "https://raw.githubusercontent.com/alvaro-bm18/template-blog-react/master/screenshots/TEMP_BLOG_cover.png",
                "https://raw.githubusercontent.com/alvaro-bm18/template-blog-react/master/screenshots/TEMP_BLOG_footer.png",
                "https://raw.githubusercontent.com/alvaro-bm18/template-blog-react/master/screenshots/TEMP_BLOG_img.png",
                "https://raw.githubusercontent.com/alvaro-bm18/template-blog-react/master/screenshots/TEMP_BLOG_segmento.png"
            ]
        },
        {
            title: "Multi step checkout",
            tech: ["react", "javascript", "scss"],
            description: {
                "es": "Gato, juego con dos modos de jugar, jugador contra cpu y jugador contra jugador, el primero en hacer tres fichas gana la ronda.",
                "en": "Gato, game with two ways to play, player vs cpu and player vs player, the first one to make tree in line winn the match."
            },
            link: "https://github.com/alvaro-bm18/multi-step-checkout",
            screenshots: [
                "https://raw.githubusercontent.com/alvaro-bm18/multi-step-checkout/master/screenshots/MULTI_FORM_cover.png",
                "https://raw.githubusercontent.com/alvaro-bm18/multi-step-checkout/master/screenshots/MULTI_FORM_interface.png",
                "https://raw.githubusercontent.com/alvaro-bm18/multi-step-checkout/master/screenshots/MULTI_FORM_interface2.png",
                "https://raw.githubusercontent.com/alvaro-bm18/multi-step-checkout/master/screenshots/MULTI_FORM_interface3.png"
            ]
        },
        {
            title: "Hangman",
            tech: ["Javascript", "Css", "Html"],
            description: {
                "es": "Hangman, juego donde debes adivinar una palabra con un limitado numero de intentos, la dificulad del juego depende del numero de letras a adivinar.",
                "en": "Hangman, game where you most guess a word with a limited number of attemps, the difficulty of game depends of number of letters to guess."
            },
            link: "https://github.com/alvaro-bm18/hangman-game",
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
                    if (expand && index > 2) {
                        return <></>;
                    }
                    return <div className="project" key={`pj-${index}`}>
                        <h2>{project.title}</h2>
                        <p className="desc-project">{project.description[lang]}</p>
                        <div className="tech-tags">
                            {project.tech.map((techSkill, ind) => <p><strong>{techSkill}</strong>{ind === (project.tech.length - 1) ? '' : ' 🔹 '}</p>)}
                        </div>
                        <div className="links-project">
                            <p>🔗 <a href={project.link}>{project.title}</a></p>
                        </div>
                        <GallerySS screenshots={project.screenshots} />
                    </div>;
                })}

                <div className="button-show" onClick={() => setExpand(!expand)}>{expand ? "ver más" : "ver menos"}</div>
            </div>
        </section>
    );
}

export default Projects;