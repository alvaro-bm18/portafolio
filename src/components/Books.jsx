import React from "react";
import "./Books.scss";
import cppBook from "./assets/books/cpp.jpg";
import goodPartBook from "./assets/books/good-parts.jpg";
import reactBook from "./assets/books/reactForPros.png";

const Books = ({ lang, theme }) => {
    const booksReaded = [
        {
            title: "The c++ programming language",
            author: "Bjarne Stroustrup",
            cover: cppBook,
            description: {
                es: "Es un libro escrito por el creador del lenguaje C++, en el libro se exploran muchos conceptos del lenguaje, su sintaxis, su historia e información sobre las librerías y características del mismo. Es considerado la mejor opción para quien quiere aprender C++.",
                en: "It is a book written by the creator of the C++ language, which explores many concepts of the language, its syntax, history, and information about its libraries and characteristics. It is considered the best option for anyone who wants to learn C++."
            },
            link: "#"
        },
        {
            title: "Javascript: the good parts",
            author: "Douglas Crockford",
            cover: goodPartBook,
            description: {
                es: "Este libro habla sobre las buenas prácticas de JavaScript, incluyendo funciones, objetos, arreglos y expresiones regulares. También explica cómo escribir código efectivo y eficaz, proporcionando una breve historia del lenguaje y cubriendo algunas debilidades del mismo.",
                en: "This book talks about the good practices of JavaScript, including functions, objects, arrays, and regular expressions. It also explains how to write effective and efficient code, providing a brief history of the language and covering some of its weaknesses."
            },
            link: "#"
        },
        {
            title: "React js: notes for professionals",
            author: "Goalkicker",
            cover: reactBook,
            description: {
                es: "Este libro es muy técnico y está dirigido a personas con experiencia en desarrollo. Es una guía completa de cómo usar React.js correctamente, que incluye snippets y ejemplos claros de código para mostrar su funcionamiento. Además, en sus primeras secciones aborda conceptos primordiales de la librería, como el estado, props, lifecycle y otros métodos. También hace referencia a Redux, React Router y al testing de React.",
                en: "This book is highly technical and aimed at people with experience in development. It is a complete guide on how to use React.js correctly, which includes snippets and clear code examples to demonstrate its functionality. Additionally, the book covers fundamental concepts of the library in its initial sections, such as state, props, lifecycle, and other methods. It also references Redux, React Router, and React testing."
            },
            link: "https://goalkicker.com/ReactJSBook/"
        }
    ];

    return (
        <section id="books">
            <h1>🔖 {`${lang === "es" ? "Libros" : "Books"}`}</h1>
            <h4>{`${lang === "es" ? "Estos son algunos libros que he leído en mi viaje de aprendizaje": "These are some books that I have read in my learning journey"} 📚`}</h4>
            <div className="bibliotech">
                {booksReaded.map((book, index) => {
                    return (<figure className={`shadow-${theme}`}>
                        <img
                            src={book.cover}
                            alt={`Cover of ${book.title}`}
                            style={{
                                "float": `${index % 2 === 0 ? "right" : "left"}`,
                                "margin": `${index % 2 === 0 ? "0 0 0 20px" : "0 20px 0 0"}`
                            }} />
                        <figcaption
                            style={{ "clear": `${index % 2 === 0 ? "left" : "right"}` }}>
                            <h3>{book.title}</h3>
                            <h4>{book.author}</h4>
                            <p>{book.description[lang]}</p>
                            <a href={book.link}>{`${lang === "es" ? "saber más" : "know more"}`}</a>
                        </figcaption>
                    </figure>);
                })}
            </div>
        </section>
    );
}

export default Books;