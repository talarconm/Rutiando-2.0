import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../Firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

interface User {
    uid: string;
    email: string;
    nombre: string;
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    logout: () => Promise<void>;
    
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedOut, setIsLoggedOut] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                try {
                    const docRef = doc(db, "usuarios", firebaseUser.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setUser({
                            uid: firebaseUser.uid,
                            email: firebaseUser.email!,
                            ...docSnap.data(),
                        } as User);
                    } else {
                        console.error("No se encontraron datos del usuario."); //Para ver si se guardda bien
                    }
                } catch (error) {
                    console.error("Error al obtener datos del usuario:", error);
                }
            } else {
                setUser(null); // Limpia el estado si no hay usuario autenticado
            }
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        try {
            await signOut(auth); // Cierra la sesion en Firebase
            setUser(null); // Limpia el estado del usuario
            setIsLoggedOut(true); // Marca el estado de cerrado
            setTimeout(() => setIsLoggedOut(false), 500); // Reinicia el estado despues
            console.log("Sesión cerrada. Estado del usuario reiniciado.");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout,  }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser debe usarse dentro de UserProvider");
    }
    return context;
};
