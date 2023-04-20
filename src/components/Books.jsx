import React from "react";
import "./Books.scss";
import cppBook from "./assets/books/cpp.jpg";
import goodPartBook from "./assets/books/good-parts.jpg";
import eloquentBook from "./assets/books/eloquent.png";
import reactBook from "./assets/books/reactForPros.png";
import javascriptBook from "./assets/books/javascriptForPros.png";

const Books = ({ lang, theme }) => {
    const booksReaded = [
        {
            title: "The c++ programming language",
            author: "Bjarne Stroustrup",
            cover: cppBook,
            description: {
                es: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat reiciendis repellat ipsa, voluptas dicta voluptatibus aut ipsam. Ex, aspernatur quis possimus placeat iure voluptate eveniet officia a libero neque veniam?",
                en: ""
            },
            link: "#"
        },
        {
            title: "Javascript: the good parts",
            author: "Douglas Crockford",
            cover: goodPartBook,
            description: {
                es: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat reiciendis repellat ipsa, voluptas dicta voluptatibus aut ipsam. Ex, aspernatur quis possimus placeat iure voluptate eveniet officia a libero neque veniam?",
                en: ""
            },
            link: "#"
        },
        {
            title: "Eloquent javascript",
            author: "Marijn Haverbeke",
            cover: eloquentBook,
            description: {
                es: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat reiciendis repellat ipsa, voluptas dicta voluptatibus aut ipsam. Ex, aspernatur quis possimus placeat iure voluptate eveniet officia a libero neque veniam?",
                en: ""
            },
            link: "#"
        },
        {
            title: "React js: notes for professionals",
            author: "Goalkicker",
            cover: reactBook,
            description: {
                es: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat reiciendis repellat ipsa, voluptas dicta voluptatibus aut ipsam. Ex, aspernatur quis possimus placeat iure voluptate eveniet officia a libero neque veniam?",
                en: ""
            },
            link: "https://goalkicker.com/ReactJSBook/"
        },
        {
            title: "Javascript: notes for professionals",
            author: "Goalkicker",
            cover: javascriptBook,
            description: {
                es: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat reiciendis repellat ipsa, voluptas dicta voluptatibus aut ipsam. Ex, aspernatur quis possimus placeat iure voluptate eveniet officia a libero neque veniam?",
                en: ""
            },
            link: "https://goalkicker.com/JavaScriptBook/"
        }
    ];

    return (
        <section id="books">
            <h1>🔖 {`${lang === "es" ? "Libros" : "Books"}`}</h1>
            <h4>Estos son algunos libros que he leído en mi viaje de aprendizaje 📚</h4>
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
                            <a href={book.link}>saber más</a>
                        </figcaption>
                    </figure>);
                })}
            </div>
        </section>
    );
}

export default Books;