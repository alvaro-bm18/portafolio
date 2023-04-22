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
import Now from "./Now";
import Footer from "./Footer";

const App = () => {
    const [theme, setTheme] = useState("light");
    const [lang, setLang] = useState("es");
    const [records, setRecords] = useState([]);

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

    const myHistory = recordHistory => {
        const history = [...records];
        let valid = true;
        history.map(rec => {
            if(rec === recordHistory){
                valid = false;
            }
        });

        if(valid){
            if(history.length === 2){
                history[0] = recordHistory;
            }else{
                history.push(recordHistory);
            }
            history.reverse();

            setRecords([...history]);
        }
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
                <Menu
                    lang={lang}
                    children={
                        <>
                            <a
                                href="#projects"
                                onClick={() => { myHistory('projects') }}>📁 {lang === "es" ? "Proyectos" : "Projects"}</a>
                            <a
                                href="#education"
                                onClick={() => { myHistory('education') }}>📒 {lang === "es" ? "Educación" : "Education"}</a>
                            <a
                                href="#books"
                                onClick={() => { myHistory('books') }}>🔖 {lang === "es" ? "Libros (leídos)" : "Books (read)"}</a>
                            <a
                                href="#now"
                                onClick={() => { myHistory('now') }}>📌 {lang === "es" ? "Actualmente" : "Now"}</a>
                        </>
                    } />
                <Projects lang={lang} />
                <Education lang={lang} />
                <Books lang={lang} theme={theme} />
                <Now lang={lang} />
            </div>
            <Footer lang={lang} theme={theme} />
            <div className={`button-control btn-${theme}`}>
                {
                    records.map(record => <a href={`#${record}`}>{record}</a>)
                }
                <a href="#menu">menu</a>
                <a href="#top">top</a>
            </div>
        </>
    );
}

export default App;