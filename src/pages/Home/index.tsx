import { FormEvent, useRef, } from "react";
import { Input } from "components/Input";
import "./styles.css";

export function Home() {
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <main className="home_main_container">
            <form
                onSubmit={handleSubmit}
                className="home_form_container"
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