import React from "react";
import "./Menu.scss";

const Menu = ({ lang, children }) => {
    return (
        <div id="menu">
            <h2>{lang === "es" ? "He hecho..." : "I have done..."}</h2>
            <section className="menu-works">
                <div className="options-menu">
                    {children}
                </div>
            </section>
        </div>
    );
}
export default Menu;