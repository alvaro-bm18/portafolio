import React from "react";
import "./Menu.scss";

const Menu = ({ lang }) => {
    return (
        <>
            <section className="menu-works">
                <h2>{lang === "es" ? "He hecho..." : "I have done..."}</h2>
                <div className="options-menu">
                    <a href="#projects">📁 {lang === "es" ? "Proyectos" : "Projects"}</a>
                    <a href="#education">📒 {lang === "es" ? "Educación" : "Education"}</a>
                    <a href="#books">🔖 {lang === "es" ? "Libros (leídos)" : "Books (read)"}</a>
                    <a href="#now">📌 {lang === "es" ? "Actualmente" : "Now"}</a>
                </div> 
            </section>
        </>
    );
}
export default Menu;