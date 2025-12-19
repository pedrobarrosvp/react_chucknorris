import React from "react";
import Header from "../components/header/Header";

const MainHome: React.FC = () => {
    return (
        <div>
            MainHome
        </div>
    );
};

const Home : React.FC = () => {
    return (
        
        <div>
            <Header/>
            <MainHome/>
        </div>
        
    );
};

export default Home;