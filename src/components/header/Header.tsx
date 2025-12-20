import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCatImage } from "../../services/api";
import "./Header.css";

const Header: React.FC = () => {
    const [catImage, setCatImage] = useState<string>("");

    useEffect(() => {
        const fetchImage = async () => {
            const imageUrl = await getCatImage();
            setCatImage(imageUrl);
        };
        fetchImage();
    }, []);

    return (
        <header className="header">
            <div className="header-inner">
                <div className="gato">
                    <Link to="/" className="logo">
                    <div className="cat-wrapper">
                        {catImage ? (
                            <img src={catImage} alt="Gatinho fofo" />
                        ) : (
                            <span>Gatinho</span>
                        )}
                    </div>
                    </Link>
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/chuck-norris">Chuck Norris</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;