import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export function Private() {
    const { data } = useAuth();

    if (!data) {
        return <Navigate to="/" />
    }

    return (
        <h2>Olá, {data?.user.name} tudo bem ?</h2>
    );
}