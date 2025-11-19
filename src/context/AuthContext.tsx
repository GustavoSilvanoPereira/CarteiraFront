import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


type AuthData = {
email: string | null;
senha: string | null;
isAdmin: boolean;
};


type AuthContextType = {
auth: AuthData | null;
signIn: (email: string, senha: string) => Promise<void>;
signOut: () => Promise<void>;
};


export const AuthContext = createContext<AuthContextType>({
auth: null,
signIn: async () => {},
signOut: async () => {},
});


export const AuthProvider = ({ children }: { children: ReactNode }) => {
const [auth, setAuth] = useState<AuthData | null>(null);


useEffect(() => {
(async () => {
const stored = await AsyncStorage.getItem('@carteira:auth');
if (stored) setAuth(JSON.parse(stored));
})();
}, []);


const signIn = async (email: string, senha: string) => {
// Basic login rule: if admin credentials (offline check) mark admin
const isAdmin = email === 'admin@carteira.com' && senha === 'admin123';


const data: AuthData = { email, senha, isAdmin };
await AsyncStorage.setItem('@carteira:auth', JSON.stringify(data));
setAuth(data);
};


const signOut = async () => {
await AsyncStorage.removeItem('@carteira:auth');
setAuth(null);
};


return (
<AuthContext.Provider value={{ auth, signIn, signOut }}>
{children}
</AuthContext.Provider>
);
};