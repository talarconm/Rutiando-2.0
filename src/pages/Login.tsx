import { IonContent, IonPage, IonText, IonList, IonItem, IonInput, IonButton } from "@ionic/react";
import { useLocation } from "react-router-dom"; //Para recibir datos desde otra pantalla
import { useHistory } from "react-router-dom"; //Para navegar entre rutas
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import '../theme/variables.css';

// Define el tipo para location.state
interface LocationState {
    email?: string;
    password?: string;
}

const Login: React.FC = () => {
    const history = useHistory(); // Hook para redirigir a otras rutas
    const location = useLocation<LocationState>(); // Obtener datos enviados desde Register
    
    // Inicializar email y password con datos recibidos o valores predeterminados
    const initialEmail = location.state?.email || ""; 
    const initialPassword = location.state?.password || ""; 
    const [email, setEmail] = useState<string>(initialEmail);
    const [password, setPassword] = useState<string>(initialPassword);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            if (!email || !password) {
                setError("Por favor, completa todos los campos.");
                return;
            }
            
            // Autenticar usuario con email y contraseña
            await signInWithEmailAndPassword(auth, email, password);
            history.push("/tabs"); // Redirigir a la vista principal
        } catch (error: any) {
            console.error("Error al iniciar sesión:", error.message);
            setError("Credenciales inválidas. Intenta de nuevo.");
        }
    };

    const handleRegisterRedirect = () => {
        history.push("/register"); // Redirigir a register al hacer clic en el botón
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="login-container">
                    <IonText className="texto-inicio">
                        <h2>Crea tu cuenta para disfrutar grandes aventuras</h2>
                    </IonText>
                    <IonText className="subtitulo">
                        <h3>Iniciar sesión</h3>
                    </IonText>

                    {/* Campo de entrada de email */}
                    <IonList style={{ background: "transparent" }}>
                        <IonItem lines="none" className="input-item">
                            <IonInput
                                labelPlacement="floating"
                                clearInput
                                value={email} // Prellenar el email si viene de Register
                                onIonChange={(e) => setEmail(e.detail.value!)}
                            >
                                <div slot="label" style={{ color: "#fff" }}>
                                    Email
                                </div>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    {/* Campo de entrada de contraseña */}
                    <IonList style={{ background: "transparent" }}>
                        <IonItem lines="none" className="input-item">
                            <IonInput
                                type="password"
                                labelPlacement="floating"
                                clearInput
                                value={password} // Prellenar la contraseña si viene de Register
                                onIonChange={(e) => setPassword(e.detail.value!)}
                            >
                                <div slot="label" style={{ color: "#fff" }}>
                                    Contraseña
                                </div>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    {/* Aviso de error */}
                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <IonButton className="boton-login" shape="round" onClick={handleLogin}>
                        Ingresar
                    </IonButton>
                    <IonButton className="boton-register" shape="round" onClick={handleRegisterRedirect}>
                        Registrate
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
