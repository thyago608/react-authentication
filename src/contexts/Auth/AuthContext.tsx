import { useState, createContext, ReactNode } from "react";
import { signIn } from "helpers/Auth";
import { User, UserLoginData } from "types/User";

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
        const data = await signIn(user);

        return true;
    }

    function signOut() { }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}