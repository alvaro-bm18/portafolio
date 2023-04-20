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
import Books from "./Books";
import Currently from "./Currently";
import Footer from "./Footer";

const App = () => {
    const [theme, setTheme] = useState("light");
    const [lang, setLang] = useState("es");

    const toogleTheme = () => {
        const toogled = theme === "light" ? "dark" : "light";
        const mainContainer = document.querySelector("#app");
        setTheme(toogled);
        window.localStorage.setItem("theme", toogled);
        mainContainer.style.backgroundColor = toogled === "light" ? "#f8f8f8" : "black";
        mainContainer.style.color = toogled === "light" ? "white" : "black";
    }

    const toogleLang = () => {
        const toogled = lang === "es" ? "en" : "es";
        setLang(toogled);
        window.localStorage.setItem("lang", toogled);
    }

    useEffect(() => {
        const mainContainer = document.querySelector("#app");
        const currentTheme = window.localStorage.getItem("theme");
        //(currentTheme) ? setTheme(currentTheme) : setTheme("dark");
        if (currentTheme) {
            setTheme(currentTheme);
            mainContainer.style.backgroundColor = currentTheme === "light" ? "#f8f8f8" : "black";
            mainContainer.style.color = currentTheme === "light" ? "black" : "white";
        }
        else {
            setTheme("dark");
            mainContainer.style.backgroundColor = "black";
            mainContainer.style.color = "white";
        }

        const langPage = window.localStorage.getItem("lang");
        (langPage) ? setLang(langPage) : setLang("es");
    }, [theme, lang]);

    const ButtonToogleTheme = () => <button onClick={toogleTheme}>{theme === 'light' ? '🌞' : '🌚'}</button>;
    const ButtonToogleLang = () => <button onClick={toogleLang}>{lang === 'es' ? '🇲🇽' : '🇺🇸'}</button>;
    return (
        <>
            <Header
                theme={theme}
                bg={Background}
                buttonLang={<ButtonToogleLang />}
                buttonTheme={<ButtonToogleTheme />} />
            <div className="app-container-content">
                <Introduce lang={lang} />
                <Description lang={lang} theme={theme} />
                <Skills lang={lang} theme={theme} />
                <Menu lang={lang} />
                <Projects lang={lang} />
                <Education lang={lang} />
                <Books lang={lang} theme={theme} />
                <Currently lang={lang} />
            </div>
            <Footer lang={lang} theme={theme} />
        </>
    );
}

export default App;