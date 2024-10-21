import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
} from '@ionic/react';

interface DetalleRutaProps {
    isOpen: boolean;
    onClose: () => void;
    imagenSrc: any,
    titulo: string;
    descripcion: string;
}

const DetalleRuta: React.FC<DetalleRutaProps> = ({
    isOpen,
    onClose,
    imagenSrc,
    titulo,
    descripcion,
}) => {
    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <img className="img-publicacion" alt={titulo} src={imagenSrc} />
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{titulo}</IonTitle>
                    <IonButton slot="end" onClick={onClose}>Volver</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                
                <p style={{ padding: '16px' }}>{descripcion}</p>
            </IonContent>
        </IonModal>
    );
};

export default DetalleRuta;
