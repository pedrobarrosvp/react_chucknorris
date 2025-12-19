import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ChuckNorris from "../pages/ChuckNorris";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home/>}/>
                <Route path="/chuck-norris" element={<ChuckNorris />} />
            </Routes>
        </BrowserRouter>
    )
};
