import React from "react";
import "./Footer.scss";

const Footer = ({ lang, theme }) => {
    return (
        <footer
            id="bottom"
            style={
                {
                    "backgroundColor": `${theme === "light" ? "#EEE" : "#333"}`,
                    "color": `${theme == "light" ? "black" : "white"}`,
                    "boxShadow": `inset 0 2px 0 0 rgba(${theme === "light" ? "0,0,0" : "250,250,250"},0.2)`
                }
            }>
            <p>🇲🇽 México | 🎯 {lang === "es" ? "Enfocado" : "Focusing"} | 🐧 {lang === "es" ? "Evangelista de código abierto" : "Open source evangelist"}.</p>
            <p>{lang === "es" ? "Hecho con amor por mí" : "Made for love by me"} 💓.</p>
        </footer>
    );
}

export default Footer;