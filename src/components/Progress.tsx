import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

const ProgressCard: React.FC = () => {
    const handleCardClick = () => {
        window.open('https://calendar.google.com', '_blank'); // Abre una pestaña con el calendario al hacer clic
    };

    return (
        <IonCard className='progreso' onClick={handleCardClick} button>
            <IonCardHeader>
                <IonCardTitle style={{ color: 'white', fontSize: '25px' }}>Progreso Semanal</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <div style={{ color: 'white', fontSize: '18px' }}>Rutas: 3</div>
                <div style={{ color: 'white', fontSize: '18px' }}>Duración: 2h 32min</div>
                <div style={{ color: 'white', fontSize: '18px' }}>Distancia: 22.05km</div>
            </IonCardContent>
        </IonCard>
    );
};

export default ProgressCard;
