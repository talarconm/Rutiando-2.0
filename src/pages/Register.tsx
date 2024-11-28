import {
    IonContent,
    IonPage,
    IonText,
    IonList,
    IonItem,
    IonInput,
    IonButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom"; //Para navegación
import { useState } from "react";
import { auth, db } from "../Firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Register: React.FC = () => {
    const history = useHistory();
    const [username, setUsername] = useState<string>(""); //Nombre de usuario
    const [email, setEmail] = useState<string>(""); //Email
    const [password, setPassword] = useState<string>(""); //Contraseña
    const [error, setError] = useState<string | null>(null); //Mostrar errores

    const handleRegister = async () => {
        if (!username || !email || !password) {
            setError("Por favor, completa todos los campos.");
            return;
        }
    
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.");
            return;
        }
    
        try {
            console.log("Creando usuario...");
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Usuario creado:", user);
    
            console.log("Guardando datos en Firestore...");
            await setDoc(doc(db, "usuarios", user.uid), {
                nombre: username,
                email: user.email,
                creadoEn: new Date(),
            });
            console.log("Datos guardados en Firestore.");
    
            // Redirigir al inicio de sesión con datos prellenados
            history.push({
                pathname: "/login",
                state: { email, password }, // Pasar datos al componente de inicio de sesión
            });
        } catch (error: any) {
            console.error("Error al registrar usuario:", error.message);
    
            if (error.code === "auth/email-already-in-use") {
                setError("El correo ya está registrado. Por favor, inicia sesión o usa otro correo.");
            } else {
                setError("No se pudo registrar. Verifica tus datos.");
            }
        }
    };
    
    


    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="register-container">
                    <IonText className="texto-inicio">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Regístrate para vivir grandes aventuras</h2>
                    </IonText>
                    <IonText className="subtitulo">
                        <h3>Crear cuenta</h3>
                    </IonText>

                    {/* Campo de entrada de nombre de usuario */}
                    <IonList style={{ background: "transparent" }}>
                        <IonItem lines="none" className="input-item">
                            <IonInput
                                labelPlacement="floating"
                                clearInput
                                onIonChange={(e) => setUsername(e.detail.value!)}
                            >
                                <div slot="label" style={{ color: "#fff" }}>
                                    Nombre de usuario
                                </div>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    {/* Campo de entrada de email */}
                    <IonList style={{ background: "transparent" }}>
                        <IonItem lines="none" className="input-item">
                            <IonInput
                                type="email"
                                labelPlacement="floating"
                                clearInput
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
                                onIonChange={(e) => setPassword(e.detail.value!)}
                            >
                                <div slot="label" style={{ color: "#fff" }}>
                                    Contraseña
                                </div>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    

                    {/* Botón de registro */}
                    <div className="container-boton-register">
                        <IonButton className="boton-register" shape="round" onClick={handleRegister}>
                            Registrarse
                        </IonButton>
                    </div>

                    {/* Imagen */}
                    <div className="zorro">
                        <img
                            className="zorro-register"
                            src="../src/images/zorroFINAL.png"
                            alt="zorro"
                        />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Register;
