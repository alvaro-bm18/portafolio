import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Header";

const App = () => {
    const [theme, setTheme] = useState("light");
    const toogleTheme = () => {
        const toogled = theme === "light" ? "dark" : "light";
        setTheme(toogled);
        window.localStorage.setItem("theme", toogled);
    }

    useEffect(() => {
        const currentTheme = window.localStorage.getItem("theme");
        (currentTheme) ? setTheme(currentTheme) : setTheme("dark");
    }, theme);

    const ButtonToogle = () => <button onClick={toogleTheme}>Change</button>;
    return (
        <>
            <Header
                theme={theme}
                buttonToggleTheme={<ButtonToogle />} />
        </>
    );
}

export default App;