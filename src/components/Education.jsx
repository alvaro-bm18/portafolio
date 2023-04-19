import React from "react";
import "./Education.scss";

import mantiz from "./assets/mantiz.png";
import cecyteh from "./assets/cecyteh.jpg";
import upmh from "./assets/upmh.jpg";
import ossu from "./assets/ossu.jpg";
import alura from "./assets/alura.jpg";

const Education = ({ lang }) => {
    const education = [
        {
            "src": mantiz,
            "name": "Mantiz Game Studios",
            "duration": "2017-2017",
            "description": {
                "es": "En este curso aprendí a usar un popular motor para videojuegos, Unity, haciendo ejercicios profesionales en entornos 2d y 3d usando lenguajes de programación como Javascript y C#. Creé aplicaciones de Realidad Virtual y Realidad Aumentada con lo aprendido en Unity usando también aplicaciones de terceros, por lo cual fui acreedor de mi certificado.",
                "en": ""
            }
        },
        {
            "src": cecyteh,
            "name": "Colegio de Estudios Cientificos y Tecnologicos del Estado de Hidalgo",
            "duration": "2014-2017",
            "description": {
                "es": "En el bachillerato, me recibí como técnico en programación habiendo concluido mis estudios en programación web, desarrollo de aplicaciones móviles y configuración de servidores. Aprendí lo que más adelante sería una pasión inmensa, el desarrollo de web, con lo cual me quedaría hasta la fecha.",
                "en": ""
            }
        },
        {
            "src": upmh,
            "name": "Universidad Politécnica Metropolitana de Hidalgo",
            "duration": "2017-2018",
            "description": {
                "es": "La UPMH, una universidad bilingüe del Estado de Hidalgo, me enseño las bases del diseño y desarrollo web, aunque no la halla concluido por asuntos personales, se queda en mi como un lugar donde aprendí muchos conceptos importantes en mi desarrollo personal y profesional.",
                "en": ""
            }
        },
        {
            "src": ossu,
            "name": "Open Source Society University",
            "duration": "2019-2020",
            "description": {
                "es": "En mi viaje de auto descubrimiento y de aprendizaje me encontré con un proyecto bastante interesante de parte de la comunidad Open Source que se encargó de juntar los principales cursos de programación, libros, artículos, foros y sitios web donde cualquier persona con inquietudes de aprender pueda seguir su ruta de aprendizaje sin importar su situación económica, esta iniciativa me cambio la perspectiva y me siento afortunado por el momento histórico de vivir esta oportunidad.",
                "en": ""
            }
        },
        {
            "src": alura,
            "name": "Alura Latam",
            "duration": "2023-",
            "description": {
                "es": "Alura en trabajo en conjunto con Oracle proporcionan un curso de desarrollo Front-End, un curso de duración de seis meses en los cuales se abordan temas como desarrollo personal, principios de la programación, gestión de empresas, emprendimiento y temas más enfocados al desarrollo con React y Javascript en general.",
                "en": ""
            }
        }
    ];
    return (
        <section id="education">
            <h1>📒 {lang === "es" ? "Educación" : "Education"}</h1>
            <div className="education-container">
                {
                    education.map(school => {
                        return <div className="school-container">
                            <img src={school.src} className="img-school" alt={"Holas"} />
                            <h3>{school.name}</h3>
                            <p>{school.duration}</p>
                            <p>{school.description[lang]}</p>
                        </div>;
                    })
                }
            </div>
        </section>
    );
}

export default Education;