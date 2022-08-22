import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Private } from "pages/Private";

export function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="private" element={<Private />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}