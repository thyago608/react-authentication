import { FormEvent, useRef, } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "components/Input";
import { useAuth } from "hooks/useAuth";
import "./styles.css";

export function Home() {
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const { signIn } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const data = !!inputEmailRef?.current?.value && !!inputPasswordRef?.current?.value;

        if (data) {
            const newUser = {
                email: inputEmailRef.current.value,
                password: inputPasswordRef.current.value
            }

            const isLogged = await signIn(newUser);

            if (isLogged) {
                navigate('private');
            }
        }
    }

    return (
        <main className="home-main-container">
            <form
                onSubmit={handleSubmit}
                className="home-form-container"
            >
                <Input
                    label="e-mail"
                    name="email"
                    type="email"
                    ref={inputEmailRef}
                />
                <Input
                    label="password"
                    name="password"
                    type="password"
                    ref={inputPasswordRef}
                />
                <button type="submit">Entrar</button>
            </form>
        </main>
    );
}