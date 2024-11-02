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
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
} from '@ionic/react';
import './Tab3.css';
import CardActividades from '../components/Actividades';

const Tab3: React.FC = () => {
    return (
        <>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar className='bar'>
                        <IonTitle className='tex-titulo'>RutiAndo</IonTitle>
                        <IonButtons slot="end">
                            <IonMenuButton />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                    </IonHeader>
                    <br />
                    <IonSearchbar className='searchbar3'></IonSearchbar>
                    <br />
                    <IonTitle className='actividades'>Actividades</IonTitle>

                    <div className="card-container-incio">
                        <CardActividades
                            imagenSrc={'../src/images/ruta.jpg'}
                            titulo={'Rutas'}
                            subtitulo={'¡Descubre nuevas rutas!'}>
                        </CardActividades>
                    </div>
                    <div>
                        <CardActividades imagenSrc={'../src/images/retos.webp'}
                            titulo={'Retos'}
                            subtitulo={'Atrevete completar nuevos retos'} >
                        </CardActividades>
                    </div>
                    <div>
                        <CardActividades imagenSrc={''}
                            titulo={'Grupos'}
                            subtitulo={'Actividades de la comunidad'} >
                        </CardActividades>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20 }}>
                        <IonTitle className='publicaciones-titul'>Publicaciones</IonTitle>
                        <Botonpublicar />
                    </div>
                    <Publicacion />
                </IonContent>
            </IonPage >
        </>
    );
};

function Botonpublicar() {
    return (
        <>
            <IonButton className="botonpublicar" shape="round">Publicar</IonButton>
        </>
    );
}

function Publicacion() {
    return (
        <IonCard className='publicacion'>
            <img alt="Silhouette of mountains" src="../src/images/reunion.jpg" />
            <IonCardHeader>
                <IonCardTitle className='publicaciones-titul'>Float_slowly</IonCardTitle>
                <IonCardSubtitle className='publicacion-subtitulo'>Festival de la bicicleta 2023!!</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent></IonCardContent>
        </IonCard>
    );
}

export default Tab3;

// Ver si creo un file de comunidad donde estaran los grupos, de ahi se crearan 3 apartados : 1)Puedes crear un reto para la comunidad 2) retos de la comunidad y/o completados por el usuario 3)Grupo creados por la comunidad y/o empresas 