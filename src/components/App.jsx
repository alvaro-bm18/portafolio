import React, { useEffect, useState } from "react";
import "./App.scss";
import Background from "./assets/background.jpg";
import Header from "./Header";

const App = () => {
    const [theme, setTheme] = useState("light");
    const [lang, setLang] = useState("es");

    const toogleTheme = () => {
        const toogled = theme === "light" ? "dark" : "light";
        setTheme(toogled);
        window.localStorage.setItem("theme", toogled);
    }

    const toogleLang = () => {
        const toogled = lang === "es" ? "en" : "es";
        setLang(toogled);
        window.localStorage.setItem("lang", toogled);
    }

    useEffect(() => {
        const currentTheme = window.localStorage.getItem("theme");
        (currentTheme) ? setTheme(currentTheme) : setTheme("dark");

        const langPage = window.localStorage.getItem("lang");
        (langPage) ? setLang(langPage) : setLang("es");
    }, [theme, lang]);

    const ButtonToogleTheme = () => <button onClick={toogleTheme}>Change theme</button>;
    const ButtonToogleLang = () => <button onClick={toogleLang}>Change lang</button>;
    return (
        <>
            <Header
                theme={theme}
                bg={Background}
                buttonLang={<ButtonToogleLang />}
                buttonTheme={<ButtonToogleTheme />} />
        </>
    );
}

export default App;