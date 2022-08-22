import { useState, createContext, ReactNode } from "react";
import { login, logout } from "helpers/Auth";
import { UserData, UserLoginData } from "types/User";

interface AuthProviderProps {
    children: ReactNode;
};

interface AuthContextData {
    user: UserData | null;
    signIn: (user: UserLoginData) => Promise<boolean>;
    signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserData | null>(null);

    async function signIn(user: UserLoginData): Promise<boolean> {
        const data = await login(user);

        if (data.user && data.token) {
            setUser({ user: data.user, token: data.token });
            return true;
        }

        return false;
    }

    async function signOut() {
        await logout();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}