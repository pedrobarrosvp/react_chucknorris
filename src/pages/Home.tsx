import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import { getBrowserInfo } from "../services/api";
import type { BrowserInfo } from "../services/api";
import "./Home.css";

const MainHome: React.FC = () => {
    const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBrowserInfo = async () => {
            try {
                const info = await getBrowserInfo();
                setBrowserInfo(info);
            } catch (err) {
                setError("Erro ao carregar informações do navegador");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBrowserInfo();
    }, []);

    return (
        <div className="main-home">
            {loading ? (
                <p>Carregando informações...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : browserInfo ? (
                <div className="browser-info">
                    <h2>Informações do Navegador</h2>
                    <div className="info-card">
                        <p><strong>Browser:</strong> {browserInfo.browser_family}</p>
                        <p><strong>Versão:</strong> {browserInfo.version}</p>
                        <p><strong>Brand:</strong> {browserInfo.brand}</p>
                        <p><strong>Tipo:</strong> {browserInfo.type}</p>
                        <p><strong>Sistema Operacional:</strong> {browserInfo.os_family}</p>
                    </div>
                </div>
            ) : (
                <p>Nenhuma informação disponível</p>
            )}
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <MainHome />
        </div>
    );
};

export default Home;