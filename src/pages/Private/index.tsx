import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export function Private() {
    const { data } = useAuth();
    const userStorage = localStorage.getItem('authToken');

    if (!userStorage) {
        return <Navigate to="/" />
    }

    return (
        <h2>Olá, {data?.user.name} tudo bem ?</h2>
    );
}