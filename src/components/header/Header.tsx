import React, { useState, useEffect } from "react";
import { getCatImage } from "../../services/api";

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
        <div className="header">
            {catImage ? (
                <img src={catImage} alt="Gatinho fofo" style={{ maxWidth: "200px", borderRadius: "8px" }} />
            ) : (
                <p>Carregando gatinho...</p>
            )}
        </div>
    );
};

export default Header;