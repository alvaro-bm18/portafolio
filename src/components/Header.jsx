import React from "react";
import "./Header.scss";

const Header = ({ bg, buttonLang, buttonTheme }) => {
    return (
        <header style={{'background-image':`url(${bg})`}}>
            <figure>
                <figcaption>
                </figcaption>
            </figure>
            {buttonLang}
            {buttonTheme}
        </header>
    );
}

export default Header;