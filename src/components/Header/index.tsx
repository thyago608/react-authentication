import { Link } from "react-router-dom";
import "./styles.css";

export function Header() {
    return (
        <header className="header-container">
            <h2>Header</h2>
            <div className="header-container-links">
                <Link to="/">Home</Link>
                <Link to="private">Private</Link>
            </div>
        </header>
    );
}