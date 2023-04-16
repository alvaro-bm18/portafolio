import React, { useEffect, useState } from "react";
import "./App.scss";
import Background from "./assets/background.jpg";
import Header from "./Header";
import Introduce from "./Introduce";
import Skills from "./Skills";
import Description from "./Description";
import Menu from "./Menu";
import Projects from "./Projects";
import Education from "./Education";

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

    const ButtonToogleTheme = () => <button onClick={toogleTheme}>{theme === 'light' ? '🌞' : '🌚'}</button>;
    const ButtonToogleLang = () => <button onClick={toogleLang}>{lang === 'es' ? '🇲🇽' : '🇱🇷'}</button>;
    return (
        <>
            <Header
                theme={theme}
                bg={Background}
                buttonLang={<ButtonToogleLang />}
                buttonTheme={<ButtonToogleTheme />} />
            <div className="app-container-content">
                <Introduce lang={lang} />
                <Description lang={lang} />
                <Skills lang={lang} />
                <Menu lang={lang} />
                <Projects lang={lang} />
                <Education lang={lang} />
            </div>
        </>
    );
}

export default App;