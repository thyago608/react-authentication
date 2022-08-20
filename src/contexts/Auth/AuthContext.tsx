import { useState, createContext, ReactNode } from "react";
import { User } from "types/User";

interface UserLoginData {
    email: string;
    password: string;
}

interface AuthProviderProps {
    children: ReactNode;
};

interface AuthContextData {
    user: User | null;
    signIn: (user: UserLoginData) => Promise<boolean>;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    async function signIn(user: UserLoginData): Promise<boolean> {
        return true;
    }

    function signOut() { }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}