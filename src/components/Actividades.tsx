import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
} from '@ionic/react';

//Para recibir las propiedades del componente
interface CardActividadesProps {
    imagenSrc : string;
    titulo: string;
    subtitulo: string;
}

const CardActividades: React.FC<CardActividadesProps> = ({
    imagenSrc,
    titulo,
    subtitulo,
}) => {
    return (
        <IonCard className="CardActividades">
            <img alt={titulo} src={imagenSrc}/>
            <IonCardHeader>
                <IonCardTitle className="title-activides">{titulo}</IonCardTitle>
                <IonCardSubtitle>{subtitulo}</IonCardSubtitle>
            </IonCardHeader>
        </IonCard>
    );
};

export default CardActividades;