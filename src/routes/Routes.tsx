import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ChuckNorris from "../pages/ChuckNorris/ChuckNorris";
import Sobre from "../pages/Sobre/Sobre";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home/>}/>
                <Route path="/chuck-norris" element={<ChuckNorris />} />
                <Route path="/sobre" element={<Sobre />} />

            </Routes>
        </BrowserRouter>
    )
};
