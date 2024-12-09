import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  useIonModal,
} from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebaseConfig';
import '../theme/variables.css';
import CardActividades from '../components/Actividades';
import FormularioPublicacion from '../components/FormularioPublicacion';

const Tab3: React.FC = () => {
  const [publicaciones, setPublicaciones] = useState<any[]>([]);

  // Cargar publicaciones desde Firestore
  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'publicaciones'));
        const publicacionesFirestore = querySnapshot.docs.map((doc) => doc.data());
        setPublicaciones(publicacionesFirestore);
      } catch (error) {
        console.error('Error al cargar publicaciones:', error);
      }
    };

    fetchPublicaciones();
  }, []);

  const handleAgregarPublicacion = (publicacion: any) => {
    setPublicaciones((prev) => [...prev, publicacion]); // Agregar publicación al feed
  };

  // Configurar el modal con useIonModal
  const [present, dismiss] = useIonModal(FormularioPublicacion, {
    onAgregarPublicacion: (data: any) => {
      handleAgregarPublicacion(data);
      dismiss(); // Cierra el modal después de publicar
    },
    onCerrar: () => dismiss(), // Cerrar el modal manualmente
  });

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar className="bar">
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSearchbar className="searchbar3" placeholder="Buscar actividades"></IonSearchbar>

        <IonTitle className="actividades">Actividades</IonTitle>
        <div className="card-container-incio">
          <CardActividades
            imagenSrc={'https://i.ibb.co/rG6nMmz/ruta.jpg'}
            titulo={'Rutas'}
            subtitulo={'¡Descubre nuevas rutas!'}
          />
          <CardActividades
            imagenSrc={'https://i.ibb.co/F7gB30h/retos.webp'}
            titulo={'Retos'}
            subtitulo={'Atrévete a completar nuevos retos'}
          />
          <CardActividades
            imagenSrc={''}
            titulo={'Grupos'}
            subtitulo={'Actividades de la comunidad'}
          />
        </div>

        <div className="header-publicaciones">
          <IonTitle className="publicaciones-titul">Publicaciones</IonTitle>
          <IonButton className="botonpublicar" shape="round" onClick={() => present()}>
            Publicar
          </IonButton>
        </div>

        {/* Lista de publicaciones */}
        <div className="feed-publicaciones">
          {publicaciones.map((publicacion, index) => (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardTitle>{publicacion.titulo}</IonCardTitle>
              </IonCardHeader>
              <img
                src={publicacion.imagen}
                alt={`Publicación ${index}`}
                style={{ width: '100%', height: 'auto' }}
              />
              <IonCardContent>{publicacion.descripcion}</IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
