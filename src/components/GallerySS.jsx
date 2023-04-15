import React, { useState } from "react";
import "./GallerySS.scss";

const GallerySS = ({ screenshots }) => {
    const [ss, setSS] = useState(0);
    const goBack = () => { }
    return (
        <section className="gallery-screenshots">
            <div className="line">
                <div className="sshot">
                    <img src={screenshots[ss]} alt="screen about project" />
                </div>
            </div>
            <button
                className="go-back"
                onClick={() => {
                    if (ss === 0) {
                        setSS(screenshots.length - 1);
                    } else {
                        setSS(ss - 1);
                    }
                }}>🔙</button>
            <button
                className="go-next"
                onClick={() => {
                    if (ss === (screenshots.length - 1)) {
                        setSS(0);
                    } else {
                        setSS(ss + 1);
                    }
                }}>🔜</button>
        </section>
    );
}

export default GallerySS;