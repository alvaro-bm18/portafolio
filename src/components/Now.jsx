import React from "react";
import "./Now.scss";

const Now = ({ lang }) => {
    const nowList = [
        {
            icon: "📝",
            desc: {
                es: "Enfocado en el curso de Front-End de Alura Latam/ Oracle",
                en: "Focusing in the Front-End course by Alura Latam/ Oracle"
            }
        },
        {
            icon: "💻",
            desc: {
                es: "Estudiando en el CS50 de Harvard",
                en: "Stuying at the CS50 by Harvard"
            }
        },
        {
            icon: "📁",
            desc: {
                es: "Desarrollando mi nuevo proyecto de divulgación",
                en: "Developing my new project about divulgation"
            }
        },
        {
            icon: "⚛️",
            desc: {
                es: "Aprendiendo en profundidad React",
                en: "Learning in deep React"
            }
        },
        {
            icon: "🃏",
            desc: {
                es: "Practicando testing con JEST",
                en: "Practicing testing with JEST"
            }
        },
        {
            icon: "🇺🇸",
            desc: {
                es: "Practicando mi Inglés",
                en: "Practicing my English"
            }
        },
        {
            icon: "🇫🇷",
            desc: {
                es: "Aprendiendo Francés",
                en: "Learning French"
            }
        },
        {
            icon: "🛼",
            desc: {
                es: "Andado en patines",
                en: "Going on skates"
            }
        },
        {
            icon: "🏞",
            desc: {
                es: "Cuidando del ecosistema que me rodea",
                en: "Taking care of the ecosystem around me"
            }
        },
    ];
    return (
        <section id="now">
            <h1>📌 {lang === "es" ? "Actualmente" : "Now"}</h1>
            <div className="now-container">
                <p>Aquí encontraras lo que estoy haciendo actualmente, lo que aprendo, practico y comparto. una parte de mi mundo personal y profesional.</p>
                <div className="list-of-goals">
                    {nowList.map(item => <p><span>{item.icon}</span>{` ${item.desc[lang]}`}</p>)}
                </div>
            </div>
        </section>
    );
};

export default Now;