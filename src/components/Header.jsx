import React from "react";
import "./Header.scss";

const Header = ({ theme, bg, buttonLang, buttonTheme, perfilImg }) => {
    return (
        <header style={{ 'background-image': `url(${bg})` }}>
            <div className="app-options">
                {buttonTheme}
                {buttonLang}
            </div>
            <div
                className="photo-perfil"
                style={{ 'box-shadow': `inset 0 -70px 0 0 ${theme === 'light' ? 'white' : 'black'}` }}>
                <img src={perfilImg} alt="perfil" />
            </div>
        </header>
    );
}

export default Header;