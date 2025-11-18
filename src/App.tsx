import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DocumentationPage from "./pages/DocumentationTechPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/docs" element={<DocumentationPage />} />
            </Routes>
        </Router>
    );
}
