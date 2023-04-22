import React from "react";
import "./Introduce.scss";

const Introduce = ({ lang }) => {
    return (
        <section className="introduce-myself">
            <h1>Álvaro Barrera M.</h1>
            <h4>{lang === "es" ? "Prácticante Front-End" : "Practitioner Front-End"} 🧙🏽‍♂️</h4>
            <div className="info-introduce">
                <p>🧾 <a href="#">C.V</a></p>
                <p>💼 <a href="https://www.linkedin.com/in/alvaro-fe/" title="alvaro-bm-webdev">linkedIn</a></p>
                <p>🖥 <a href="https://github.com/alvaro-bm18" title="alvaro-bm18">github</a></p>
                <p>📭 <a href="mailto:alvaro.bm@gmail.com" title="alvaro.bm@gmail.com">{lang === "es" ? "correo" : "e-mail"}</a></p>
            </div>
        </section>
    );
}

export default Introduce;