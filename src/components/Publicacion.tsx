import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon,
    IonChip,
} from '@ionic/react';
import { star, starHalf, starOutline } from 'ionicons/icons'; // Importar starOutline
import { useState } from "react";
import DetalleRuta from './DetalleRuta';

interface PublicacionProps {
    imagenSrc: string;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    chips: string[];
    rating: number; // Prop para la cantidad de estrellas/calificación
}

const Publicacion: React.FC<PublicacionProps> = ({
    imagenSrc,
    titulo,
    subtitulo,
    descripcion,
    chips,
    rating,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

    const openModal = () => setIsModalOpen(true); // Función para abrir el modal
    const closeModal = () => setIsModalOpen(false); // Función para cerrar el modal

    // Generar las estrellas dinámicamente
    const renderStars = (rating: number) => {
        const stars = []; // Declaración correcta del array
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<IonIcon key={i} icon={star} className="star-icon" />);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<IonIcon key={i} icon={starHalf} className="star-icon" />);
            } else {
                stars.push(<IonIcon key={i} icon={starOutline} className="star-icon" />);
            }
        }
        return stars;
    };

    return (
        <>
            <IonCard className="publicacion" onClick={openModal}>
                <img className="img-publicacion" alt={titulo} src={imagenSrc} />
                <IonCardHeader>
                    <IonCardTitle className="titulo-lospeumos">{titulo}</IonCardTitle>
                    <div className="container-icono">
                        {renderStars(rating)} {/* Renderiza las estrellas dinámicamente */}
                    </div>
                    <IonCardSubtitle className="publicacion-subtitulo">
                        {subtitulo}
                    </IonCardSubtitle>
                    <div className="chip-container">
                        {chips.map((chip, index) => (
                            <IonChip key={index} className={`chip${index + 1}`}>
                                {chip}
                            </IonChip>
                        ))}
                    </div>
                </IonCardHeader>
            </IonCard>

            {/* Modal para mostrar la descripción de la ruta */}
            <DetalleRuta
                isOpen={isModalOpen}
                onClose={closeModal}
                imagenSrc={imagenSrc}
                titulo={titulo}
                descripcion={descripcion}
            />
        </>
    );
};

export default Publicacion;
