import React from "react";

const Books = ({ lang }) => {
    return (
        <section id="books">
            <h1>🔖 {`${lang === "es" ? "Libros" : "Books"}`}</h1>
        </section>
    );
}

export default Books;