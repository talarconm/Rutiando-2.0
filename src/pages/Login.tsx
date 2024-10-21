import { IonContent, IonPage, IonText, IonList, IonItem, IonInput, IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom"; //Para navegar entra rutas
import { useState } from "react";

const Login: React.FC = () => {
    const history = useHistory(); // Hook para redirigir a otra rutas
    const [email, setEmail] = useState<string>(''); // Para email
    const [password, setPassword] = useState<string>('');//Para contraseña
    //simulacion de inicio sesion
    const handleLogin = () => {
        if (email === 'admin' && password === 'password') {
            localStorage.setItem('loggedIn', 'true'); // Guardar estado de sesión
            history.push('/tabs'); // Redirigir a la vista de tabs
        } else {
            alert('Credenciales incorrectas'); // Mensaje de error
        }
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="login-container">
                    <IonText className='texto-inicio'>
                        <h2>Crea tu cuenta para disfrutar grandes aventuras</h2>
                    </IonText>
                    <IonText className="subtitulo">
                        <h3>Iniciar sesión</h3>
                    </IonText>

                    {/* Campo de entrada de email*/}
                    <IonList style={{ background: 'transparent' }}>
                        <IonItem lines='none' className='input-item'>
                            <IonInput labelPlacement="floating" clearInput onIonChange={(e) => setEmail(e.detail.value!)}>

                                <div slot="label">
                                    Email <IonText color="danger">(Required)</IonText>
                                </div>

                            </IonInput>
                        </IonItem>
                    </IonList>

                    {/* Campo de entrada de contraseña */}
                    <IonList style={{ background: 'transparent' }}>
                        <IonItem lines='none' className='input-item'>
                            <IonInput type="password" labelPlacement="floating" clearInput onIonChange={(e) => setPassword(e.detail.value!)}>
                                <div slot="label" className='div-login'>
                                    Contraseña <IonText color="dark">(Required)</IonText>
                                </div>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    <IonText className="password-hint" style={{ color: '#6A0DAD' }}>
                        <h6>¿Olvidaste tu contraseña?</h6>
                    </IonText>

                    {/* Botón de ingresar */}
                    <IonButton className='boton-login' expand="block" shape="round" onClick={handleLogin}>
                        Ingresar
                    </IonButton>

                    {/* Imagen */}
                    <div className="zorro">
                        <img className="foto-perfil" src="../src/images/zorroFINAL.png" alt="zorro" />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;