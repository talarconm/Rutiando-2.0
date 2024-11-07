import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import Publicacion from '../components/Publicacion';
import '../theme/variables.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="condense">{/* No está funcionando collapse="condense" */}</IonHeader>
      <IonContent fullscreen>
        <IonSearchbar className="searchbar1" />
        <IonTitle className="ion-tex-inicio">Rutas populares</IonTitle>
        <div>
          <Publicacion
            imagenSrc="../src/images/lospeumos.jpg"
            titulo="Sendero Los Peumos"
            subtitulo="Dificultad: Moderada"
            chips={['Senderismo', 'Familiar', 'Vista', 'Rocoso', 'Río']} descripcion={'El sendero Los Peumos es una de las opciones de senderos que pueden recorrer en el Parque Natural Aguas de Ramón, permite disfrutar de la abundante vegetación de la precordillera de Santiago, en especial el bosque de peumos, y agradables vistas panorámicas.Es considerado un sendero ideal para visitar en familia, debido a que es una ruta circular corta y sencilla, con varios miradores y una cascada.'} rating={4.5}/>
        </div>
        <div>
          <Publicacion
            imagenSrc="../src/images/sancristobal.jpg"
            titulo="Cerro san Cristobal"
            subtitulo="Dificultad: Moderada"
            chips={['PetFrienly', 'Familiar', 'Vista', 'Ciclismo', 'Ciclismo']}
            descripcion={'La segunda montaña más alta de la ciudad, es un sitio muy  visitado para realizar caminatas, andar en bicicleta, hacer actividades físicas al aire libre o simplemente disfrutar de las hermosas vistas. Durante el camino de ascenso hay diversos sitios de interés como el Jardín Japones, Zoológico Nacional, vivero Cumbre, piscinas municipales, zonas de picnic y varios miradores que permiten observar la ciudad.'} rating={4}/>
        </div>
        <div>
          <Publicacion
            imagenSrc="../src/images/elcarbon.jpg"
            titulo="Cero El Carbón"
            subtitulo="Dificultad: Difícil"
            chips={['PetFrienly', 'Familiar', 'Vista', 'Ciclismo', 'Running']}
            descripcion={'Disfruta esta ruta de ida y vuelta de 3.7-millas cerca de Vitacura, Santiago. Considerada una ruta difícil, se tarda una media de 3 h 7 min en completarla. Es un sitio muy popular para el senderismo y correr, por lo que es probable encontrarse con otras personas mientras se está por la zona. La ruta está abierta todo el año y es perfecta para visitar en cualquier momento.'} rating={3}/>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
