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
                <Link to="/" className="logo">
                    {catImage ? (
                        <img src={catImage} alt="Gatinho fofo" style={{ maxWidth: "72px", borderRadius: "8px" }} />
                    ) : (
                        <span>Gatinho</span>
                    )}
                </Link>

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