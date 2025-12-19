import React, { useEffect, useState } from "react";
import { getChuckJoke } from "../services/api";
import type { ChuckJoke } from "../services/api";
import "./ChuckNorris.css";

const MainChuckNorris: React.FC = () => {
    const [joke, setJoke] = useState<ChuckJoke | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchJoke = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getChuckJoke();
            setJoke(data);
        } catch (err) {
            console.error(err);
            setError("Erro ao carregar piada");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        void fetchJoke();
    }, []);

    return (
        <div className="main-chucknorris">
            <h1>Piadas do Chuck Norris</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : joke ? (
                <div className="joke-card">
                    {joke.icon_url && <img src={joke.icon_url} alt="icon" />}
                    <p>{joke.value}</p>
                </div>
            ) : (
                <p>Nenhuma piada disponível</p>
            )}
            <button onClick={fetchJoke} className="new-joke-btn">Nova piada</button>
        </div>
    );
};

const ChuckNorris: React.FC = () => {
    return (
        <div>
            <MainChuckNorris />
        </div>
    );
};

export default ChuckNorris;