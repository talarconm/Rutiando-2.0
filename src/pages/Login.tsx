import { IonContent, IonPage, IonText, IonList, IonItem, IonInput, IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom"; //Para navegar entre rutas
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import '../theme/variables.css';

const Login: React.FC = () => {
    const history = useHistory(); // Hook para redirigir a otra rutas
    const [email, setEmail] = useState<string>('');      // Para email
    const [password, setPassword] = useState<string>('');//Para contraseña
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            // Autenticar usuario con email y contraseña
            await signInWithEmailAndPassword(auth, email, password);
            history.push("/tabs"); // Redirigir a la vista principal
        } catch (error: any) {
            console.error("Error al iniciar sesión:", error.message);
            setError("Credenciales inválidas. Intenta de nuevo.");
        }
    };

    const handleRegisterRedirect =() => {
        history.push('/register'); // Redirigir a register al hacer clik en el boton
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

                    {/* Campo de entrada de email*/}
                    <IonList style={{ background: 'transparent' }}>
                        <IonItem lines='none' className='input-item'>
                            <IonInput labelPlacement="floating" clearInput onIonInput={(e: any) => setEmail(e.target.value)}>

                            <div slot="label" style={{ color: "#fff" }}>
                                    Email
                                </div>

                            </IonInput>
                        </IonItem>
                    </IonList>

                    {/* Campo de entrada de contraseña */}
                    <IonList style={{ background: 'transparent' }}>
                        <IonItem lines='none' className='input-item'>
                            <IonInput type="password" labelPlacement="floating" clearInput onIonInput={(e: any) => setPassword(e.target.value)}>
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

                    {/* Botón de register */}
                    <div className="container-boton-register">
                        <IonButton className='boton-register' shape="round" onClick={handleRegisterRedirect}>
                            Registrate
                        </IonButton>
                    </div>

                    {/* Imagen */}
                    <div className="zorro">
                        <img className="zorro-login" src="public/images/zorroFINAL.png" alt="zorro" />
                    </div>
                </div>
            </IonContent>
        </IonPage>
        
    );
};

export default Login;

