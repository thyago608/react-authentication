import { useState, createContext, ReactNode } from "react";
import { login, logout } from "helpers/Auth";
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

    async function signIn(user: UserLoginData): Promise<boolean> {
        const data = await login(user);

        if (data.user && data.token) {
            setData({ user: data.user, token: data.token });
            return true;
        }

        return false;
    }

    async function signOut() {
        await logout();
        setData(null);
    }

    return (
        <AuthContext.Provider value={{ data, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}