import React from "react";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonMenuButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonAvatar,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
} from "@ionic/react";
import { pencilOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom"; // Para redirigir
import { useUser } from "../Context/UserContext"; // Importa el contexto del usuario
import "../theme/variables.css";
import Progress from "../components/Progress";
import { signOut } from "firebase/auth";
import { auth } from "firebase-admin";

const PerfilPage: React.FC = () => {
    const { user, logout } = useUser();
    const history = useHistory();

    const handleLogout = async () => {
        try {
            await logout(); // Usa el método del contexto para cerrar sesión
            history.replace("/login"); // Redirige al login
            console.log("Cierre de sesión exitoso.");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };
    
    

    if (!user) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Perfil</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <p>Cargando datos del usuario...</p>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="bar">
                    <IonTitle className="tex-titulo">RutiAndo</IonTitle>
                    <IonButtons slot="end">
                        <IonMenuButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <UserProfile />
                <IonButton
                    expand="block"
                    color="danger"
                    onClick={handleLogout}
                    style={{ margin: "16px" }}
                >
                    Cerrar Sesión
                </IonButton>
                <Progress />
                <AchievementsSection />
            </IonContent>
        </IonPage>
    );
};


const UserProfile: React.FC = () => {
    const { user } = useUser();

    if (!user) {
        return (
            <IonCard>
                <IonCardContent>
                    <p>No hay información disponible.</p>
                </IonCardContent>
            </IonCard>
        );
    }

    return (
        <IonCard className="carduser">
            <IonCardContent className="carduser-content">
                <IonGrid>
                    <IonRow>
                        <IonCol size="3">
                            <IonAvatar>
                                <img src="public/images/zorroFINAL.png" alt="Profile picture" />
                            </IonAvatar>
                        </IonCol>
                        <IonCol size="6">
                            <IonCardTitle className="user-title">{user.nombre}</IonCardTitle>
                            <IonCardSubtitle className="user-subtitle">Email: {user.email}</IonCardSubtitle>
                        </IonCol>
                        <IonCol size="3" className="ion-text-end">
                            <IonButton fill="clear" color="primary">
                                <IonIcon icon={pencilOutline} slot="icon-only" />
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
};


const AchievementsSection: React.FC = () => {
    return (
        <>
            <IonTitle className="logros" size="large">
                Tus Logros
            </IonTitle>
            <IonGrid className="card-container">
                <IonRow>
                    <IonCol size="6">
                        <AchievementCard title="Nuevo logro 1" />
                    </IonCol>
                    <IonCol size="6">
                        <AchievementCard title="Nuevo logro 2" />
                    </IonCol>
                    <IonCol size="6">
                        <AchievementCard title="Nuevo logro 3" />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
};

const AchievementCard: React.FC<{ title: string }> = ({ title }) => {
    return (
        <IonCard className="card">
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Detalles del logro...</p>
            </IonCardContent>
        </IonCard>
    );
};

export default PerfilPage;
