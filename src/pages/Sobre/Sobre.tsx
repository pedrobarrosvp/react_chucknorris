import React from "react";
import Header from "../../components/header/Header";
import fotopeso from "../../assets/fotopeso.jpg";
import "./Sobre.css";

const MainSobre: React.FC = () => {
    return (
        <div className="sobre">
            <div className="sobre-card">
                <img src={fotopeso} alt="Foto do autor" className="sobre-photo" />
                <div className="sobre-info">
                    <h1 className="sobre-name">PEDRO BARROS</h1>
                    <p className="sobre-linkedin">
                        LinkedIn: <a href="https://www.linkedin.com/in/pedro-barros2006" target="_blank" rel="noopener noreferrer" className="placeholder-link">(www.linkedin.com/in/pedro-barros2006)</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Sobre: React.FC = () => {
    return (
        <div>
            <Header />
            <MainSobre />
        </div>
    );
};

export default Sobre;