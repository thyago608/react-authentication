import { useAuth } from "hooks/useAuth";
import { Link } from "react-router-dom";
import "./styles.css";

export function Header() {
    const { data } = useAuth();

    return (
        <header className="header-header-container">
            <h2>logo</h2>
            {data && <Link to="/">Sair</Link>}
        </header>
    );
}