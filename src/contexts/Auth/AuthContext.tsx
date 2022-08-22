import { useState, useEffect, createContext, ReactNode } from "react";
import { handleTokenInStorage, login, logout, validateToken } from "helpers/Auth";
import { UserData, UserLoginData } from "types/User";

interface AuthProviderProps {
    children: ReactNode;
};

interface AuthContextData {
    data: UserData | null;
    signIn: (user: UserLoginData) => Promise<boolean>;
    signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<UserData | null>(null);

    useEffect(() => {
        const validadeUser = async () => {
            const userStorage = localStorage.getItem('authToken');

            if (userStorage) {
                const data = await validateToken(userStorage);

                if (data) {
                    setData(data);
                }
            }
        }
        validadeUser();
    }, [data?.token])

    async function signIn(user: UserLoginData): Promise<boolean> {
        const data = await login(user);

        if (data.user && data.token) {
            setData({ user: data.user, token: data.token });
            handleTokenInStorage(data.token);
            return true;
        }

        return false;
    }

    async function signOut() {
        if (data?.token) {
            await logout(data.token);
            setData(null);
            localStorage.removeItem('authToken');
        }
    }

    return (
        <AuthContext.Provider value={{ data, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}