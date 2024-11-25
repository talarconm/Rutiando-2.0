import React from 'react';
import { IonCard,
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
IonIcon} from '@ionic/react';
import { pencilOutline } from 'ionicons/icons';
import '../theme/variables.css';
import Progress from '../components/Progress';

const PerfilPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='bar'>
                    <IonTitle className='tex-titulo'>RutiAndo - Perfil</IonTitle>
                    {/* Botón para mostrar el menú */}
                    <IonButtons slot='end'>
                        <IonMenuButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <UserProfile />
                <Progress />
                <AchievementsSection />
            </IonContent>
        </IonPage>
    );
};

const UserProfile: React.FC = () => {
    return (
        <IonCard className='carduser'>
            <IonCardContent className='carduser-content'>
                <IonGrid> {/* Organizar el contenido de la tarjeta */}
                    <IonRow > {/* Organizar en filas*/}
                        <IonCol size='3'>   {/* Organizar en columnas*/}
                            <IonAvatar> {/* Para la imagen de perfil*/}
                                <img src='../src/images/zorroFINAL.png' alt='Profile picture' />
                            </IonAvatar>
                        </IonCol>
                        <IonCol size='6'>
                            <IonCardTitle className='user-title'>Ruti</IonCardTitle>
                            <IonCardSubtitle className='user-subtitle'> {/* Para los detalles del perfil*/}
                                Seguidores: 150 | Siguiendo: 180 | Logros: 10
                            </IonCardSubtitle>
                        </IonCol>
                        <IonCol size='3' className='ion-text-end'>
                            <IonButton fill='clear' color='primary'>
                                <IonIcon icon={pencilOutline} slot='icon-only' />
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
};

// Para mostrar el progreso del usuario

const AchievementsSection: React.FC = () => {
    return (
        <>
            <IonTitle className='logros' size='large'>Tus Logros</IonTitle>
            <IonGrid className='card-container'>
                <IonRow>
                    <IonCol size='6'>
                        <AchievementCard title='Nuevo logro 1' />
                    </IonCol>
                    <IonCol size='6'>
                        <AchievementCard title='Nuevo logro 2' />
                    </IonCol>
                    <IonCol size='6'>
                        <AchievementCard title='Nuevo logro 3' />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
};

 //PONER ESTO COMO UN COMPONENTE
const AchievementCard: React.FC<{ title: string }> = ({ title }) => {
    return (
        <IonCard className='card'>
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
