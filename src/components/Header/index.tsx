import { useAuth } from "hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export function Header() {
    const { data, signOut } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        await signOut();

        navigate("/");
    }

    return (
        <header className="header-header-container">
            <h2>logo</h2>
            {data && <button onClick={handleLogout}>Sair</button>}
        </header>
    );
}