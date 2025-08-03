import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRoutes() {
    return (
        <Router basename="/MyPortfolio">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
