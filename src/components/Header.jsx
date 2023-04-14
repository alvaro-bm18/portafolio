import React from "react";

const Header = ({ theme, buttonToggleTheme }) => {
    return (
        <header>
            <p>Theme: {theme}</p>
            {buttonToggleTheme}
        </header>
    );
}

export default Header;