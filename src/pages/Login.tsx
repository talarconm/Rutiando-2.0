import { IonContent, IonPage, IonText, IonList, IonItem, IonInput, IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import '../theme/variables.css';
import { useUser } from "../Context/UserContext";

const Login: React.FC = () => {
    const history = useHistory();
    const { user } = useUser(); // Extrae 'user' del contexto
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!user) { // Si no hay usuario autenticado
            setUsername("");
            setEmail("");
            setPassword("");
            setError(null);
        }
    }, [user]); // Dependencia en 'user'

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            history.push("/tabs");
        } catch (error: any) {
            console.error("Error al iniciar sesión:", error.message);
            setError("Credenciales inválidas. Intenta de nuevo.");
        }
    };

    const handleRegisterRedirect = () => {
        history.push('/register');
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="login-container">
                    <IonText className='texto-inicio'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Crea tu cuenta para disfrutar grandes aventuras</h2>
                    </IonText>
                    <IonText className="subtitulo">
                        <h3>Iniciar sesión</h3>
                    </IonText>

                    {/* Campo de entrada de nombre de usuario */}
                    <IonList style={{ background: 'transparent' }}>
                        <IonItem lines='none' className='input-item'>
                            <IonInput
                                labelPlacement="floating"
                                clearInput
                                value={username} // Asocia el valor al estado
                                onIonInput={(e: any) => setUsername(e.target.value)}
                            >
                                <div slot="label" style={{ color: "#fff" }}>
                                    Nombre de usuario
                                </div>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    {/* Campo de entrada de email */}
                    <IonList style={{ background: 'transparent' }}>
                        <IonItem lines='none' className='input-item'>
                            <IonInput
                                labelPlacement="floating"
                                clearInput
                                value={email} // Asocia el valor al estado
                                onIonInput={(e: any) => setEmail(e.target.value)}
                            >
                                <div slot="label" style={{ color: "#fff" }}>
                                    Email
                                </div>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    {/* Campo de entrada de contraseña */}
                    <IonList style={{ background: 'transparent' }}>
                        <IonItem lines='none' className='input-item'>
                            <IonInput
                                type="password"
                                labelPlacement="floating"
                                clearInput
                                value={password} // Asocia el valor al estado
                                onIonInput={(e: any) => setPassword(e.target.value)}
                            >
                                <div slot="label" style={{ color: "#fff" }}>
                                    Contraseña
                                </div>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    {/* Aviso de error */}
                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <IonText className="password-hint" style={{ color: '#6A0DAD' }}>
                        <h6>¿Olvidaste tu contraseña?</h6>
                    </IonText>

                    {/* Botón de ingresar */}
                    <div className="container-boton-login">
                        <IonButton className='boton-login' shape="round" onClick={handleLogin}>
                            Ingresar
                        </IonButton>
                    </div>

                    {/* Botón de registro */}
                    <div className="container-boton-register">
                        <IonButton className='boton-register' shape="round" onClick={handleRegisterRedirect}>
                            Regístrate
                        </IonButton>
                    </div>

                    {/* Imagen */}
                    <div className="zorro">
                        <img className="zorro-login" src="https://i.ibb.co/w44DySR/zorro-FINAL.png" alt="zorro" />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
