import React from "react";
import "./Education.scss";

import mantiz from "./assets/logos/mantiz.png";
import cecyteh from "./assets/logos/cecyteh.jpg";
import upmh from "./assets/logos/upmh.jpg";
import ossu from "./assets/logos/ossu.jpg";
import alura from "./assets/logos/alura.jpg";

const Education = ({ lang }) => {
    const education = [
        {
            "src": mantiz,
            "name": "Mantiz Game Studios",
            "duration": "2017-2017",
            "description": {
                "es": "En este curso aprendí a usar un popular motor para videojuegos, Unity, haciendo ejercicios profesionales en entornos 2d y 3d usando lenguajes de programación como Javascript y C#. Creé aplicaciones de Realidad Virtual y Realidad Aumentada con lo aprendido en Unity usando también aplicaciones de terceros, por lo cual fui acreedor de mi certificado.",
                "en": "In this course I learnt to use a popular game engine, Unity, making professional exercises in 2d and 3d environment using programming languages as Javascript and C#. I created applications of VR and AR with what I learnt in Unity using third-party apps too, for which I got my certification."
            },
            link: "http://www.mantizgs.com/mgs/esp/index.html"
        },
        {
            "src": cecyteh,
            "name": "Cecyt del Estado de Hidalgo",
            "duration": "2014-2017",
            "description": {
                "es": "En el bachillerato, me recibí como técnico en programación habiendo concluido mis estudios en programación web, desarrollo de aplicaciones móviles y configuración de servidores. Aprendí lo que más adelante sería una pasión inmensa, el desarrollo de web.",
                "en": "In technical baccalaureate, I graduated as a technician in programming having concluded my studies in web development, mobiles app develpment and server management, I learnt what later it would be an immense passion, the web development."
            },
            link: "http://www.cecyteh.edu.mx/"
        },
        {
            "src": upmh,
            "name": "Universidad Politécnica Metropolitana de Hidalgo",
            "duration": "2017-2018",
            "description": {
                "es": "La UPMH, una universidad bilingüe del Estado de Hidalgo, me enseño las bases del diseño y desarrollo web, aunque no la halla concluido por asuntos personales, se queda en mi como un lugar donde aprendí muchos conceptos importantes en mi desarrollo personal y profesional.",
                "en": "UPMH, a bilingual university of Hidalgo, it teach me the basics of design and web development, althought I have not concluded it by personal matters, I keep it inside me as a place where I learnt so much important concepts in my personal and professional development."
            },
            link: "http://www.upmh.edu.mx/"
        },
        {
            "src": ossu,
            "name": "Open Source Society University",
            "duration": "2019-2020",
            "description": {
                "es": "En mi viaje de auto descubrimiento y de aprendizaje me encontré con un proyecto bastante interesante de parte de la comunidad Open Source que se encargó de juntar los principales cursos de programación, libros, artículos, foros y sitios web donde cualquier persona con inquietudes de aprender pueda seguir su ruta de aprendizaje sin importar su situación económica, esta iniciativa me cambio la perspectiva y me siento afortunado por el momento histórico de vivir esta oportunidad.",
                "en": "On my journey of self-discovery and learning, I came across a very interesting project from the Open Source community that was responsible for gathering the main programming courses, books, articles, forums, and websites where anyone with a desire to learn can follow their learning path regardless of their economic situation. This initiative changed my perspective, and I feel fortunate to live in a time where I have this opportunity."
            },
            link: "https://github.com/ossu"
        },
        {
            "src": alura,
            "name": "Alura Latam",
            "duration": `2023-${lang === "es" ? "ahora" : "now"}`,
            "description": {
                "es": "Alura en trabajo en conjunto con Oracle proporcionan un curso de desarrollo Front-End, un curso de duración de seis meses en los cuales se abordan temas como desarrollo personal, principios de la programación, gestión de empresas, emprendimiento y temas más enfocados al desarrollo con React y Javascript en general.",
                "en": "Alura, in collaboration with Oracle, offers a six-month Front-End development course that covers topics such as personal development, programming principles, business management, entrepreneurship, and more focused topics related to development with React and Javascript in general."
            },
            link: "https://www.aluracursos.com/"
        }
    ];
    education.reverse();
    return (
        <section id="education">
            <h1>📒 {lang === "es" ? "Educación" : "Education"}</h1>
            <div className="education-container">
                {
                    education.map(school => {
                        return <div className="school-container">
                            <img
                                src={school.src}
                                className="img-school"
                                alt={`${school.name} logo`} />
                            <h3>{school.name}</h3>
                            <p>{school.duration}</p>
                            <p>
                                {school.description[lang]}<br></br>
                                <a href={school.link}>
                                    {lang === "es" ? "ver página" : "see page"}
                                </a>
                            </p>
                        </div>;
                    })
                }
            </div>
        </section>
    );
}

export default Education;