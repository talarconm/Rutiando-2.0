import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';
import '../theme/variables.css';
import MapWithUserLocation from '../components/MapWithUserLocation';
import CombinedMap from '../components/CombineMap';


const Inicio: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <br />
        <IonSearchbar className='searchbar1'></IonSearchbar>
        <div style={{ margin: '16px 0' }}>

</div>
<CombinedMap />
        <IonTitle>Tendencias</IonTitle>

        <div className="card-grid">
          <Cardinicio1 />
          <Cardinicio2 />
          <Cardinicio3 />
        </div>
        <div>
          <IonTitle>Actualidad</IonTitle>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

function Cardinicio1() {
  return (
    <IonCard className='main-card1'>
      <img className="card-image1" alt="Silhouette of mountains" src="public/images/ciclismoCard.jpg" />
      <IonCardHeader>
        <IonCardTitle>Ciclismo</IonCardTitle>
        <IonCardSubtitle>¡Descubre nuevas rutas!</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
  );
}

function Cardinicio2() {
  return (
    <IonCard className='main-card2'>
      <img className="card-image2" alt="Silhouette of mountains" src="public/images/Running.jpg" />
      <IonCardHeader>
        <IonCardTitle >Running</IonCardTitle>
        <IonCardSubtitle>Atrevete completar nuevos retos</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
  );
}

function Cardinicio3() {
  return (
    <IonCard className='main-card3'>
      <img className="card-image3" alt="Silhouette of mountains" src="public/images/HikingCard.jpg" />
      <IonCardHeader>
        <IonCardTitle>Hiking</IonCardTitle>
        <IonCardSubtitle>actividades de la comunidad</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent></IonCardContent>
    </IonCard>
  );
}


// // simulacion de la api de noticias
// function Publicacion() {
//   return (
//     <IonCard >
//       <a href='https://www.esciclismo.com/actualidad/carretera/83270.html' target='_blank' rel='noopener noreferrer'>
//         <img className="card-imagepublicacion1" alt="Silhouette of mountains" src="../src/images/mundial-ruta-elite-femenino.jpg" />
//         <IonCardHeader>
//           <IonCardTitle className='titulotab1'>Ciclismo</IonCardTitle>
//           <IonCardSubtitle className='publicacion-subtitulo1'>Mundial de Zúrich: Lotte Kopecky revalida el título en un apasionante sprint final</IonCardSubtitle>
//         </IonCardHeader>
//         <IonCardContent></IonCardContent>
//       </a>
//     </IonCard>
//   );
// }

// function Publicacion2() {
//   return (
//     <IonCard>
//       <a href="https://www.streetprorunning.com/blog/mejores-zapatillas-running/" target='_blank' rel='noopener noreferrer'>{/*target='_blank' para q el enlace se abra en una nueva pestaña rel='noopener noreferrer' practica de seguridad para evitar q la ueva pestala tenga acceso a la ventana q lo abre*/}
//         <img className="card-imagepublicacion2" alt="Silhouette of mountains" src="../src/images/adidas.png" />
//         <IonCardHeader>
//           <IonCardTitle className='titulotab1'>Running</IonCardTitle>
//           <IonCardSubtitle className='publicacion-subtitulo1'>Las 20 mejores zapatillas de running</IonCardSubtitle>
//         </IonCardHeader>
//         <IonCardContent></IonCardContent>
//       </a>
//     </IonCard>
//   );
// }

// function Publicacion3() {
//   return (
//     <IonCard>
//       <a href="https://thehappening.com/7-de-los-mejores-lugares-del-mundo-para-hiking/" target='_blank' rel='noopener noreferrer'>
//         <img className="card-imagepublicacion3 " alt="Silhouette of mountains" src="../src/images/hiking.webp" />
//         <IonCardHeader>
//           <IonCardTitle className='titulotab1'>Hiking</IonCardTitle>
//           <IonCardSubtitle className='publicacion-subtitulo1'>7 de los mejores lugares del mundo para hiking</IonCardSubtitle>
//         </IonCardHeader>
//         <IonCardContent></IonCardContent>
//       </a>
//     </IonCard>
//   );
// }

export default Inicio;
