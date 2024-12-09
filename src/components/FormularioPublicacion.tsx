import React, { useState } from 'react';
import {
    IonTitle,
    IonInput,
    IonTextarea,
    IonButton,
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonSpinner,
    IonText,
    IonButtons,
} from '@ionic/react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import '../theme/variables.css';
import { db } from '../Firebase/firebaseConfig';

interface FormularioProps {
    onAgregarPublicacion: (publicacion: any) => void;
    onCerrar: () => void; // Prop para manejar cierre del modal
}

const FormularioPublicacion: React.FC<FormularioProps> = ({ onAgregarPublicacion, onCerrar }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setImagen(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        if (!titulo || !descripcion || !imagen) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        const publicacion = {
            titulo,
            descripcion,
            imagen,
            creadoEn: Timestamp.now(),
        };

        setIsLoading(true);
        setError(null);

        try {
            await addDoc(collection(db, 'publicaciones'), publicacion);
            onAgregarPublicacion(publicacion);
            setTitulo('');
            setDescripcion('');
            setImagen(null);
        } catch (error) {
            console.error('Error al guardar la publicación en Firestore:', error);
            setError('Hubo un problema al guardar tu publicación. Inténtalo nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    {/* Botón de "Cerrar" */}
                    <IonButtons slot="start">
                        <IonButton onClick={onCerrar} color="danger">
                            Cerrar
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Crear Publicación</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div style={{ padding: 20 }}>
                    <IonInput
                        placeholder="Título"
                        value={titulo}
                        onIonChange={(e) => setTitulo(e.detail.value!)}
                        required
                    />
                    <IonTextarea
                        placeholder="Descripción"
                        value={descripcion}
                        onIonChange={(e) => setDescripcion(e.detail.value!)}
                        required
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                        id="image-upload"
                    />
                    <IonButton expand="block" fill="outline" onClick={() => document.getElementById('image-upload')?.click()}>
                        {imagen ? 'Cambiar Imagen' : 'Subir Imagen'}
                    </IonButton>
                    {error && (
                        <IonText color="danger" style={{ display: 'block', marginTop: '10px' }}>
                            {error}
                        </IonText>
                    )}
                    <IonButton expand="block" onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? <IonSpinner name="crescent" /> : 'Compartir'}
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default FormularioPublicacion;
