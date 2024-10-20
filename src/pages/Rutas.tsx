import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRouterLink, IonSearchbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">{/* no esta funcionando collapse="condense" */}
        </IonHeader>
        <br />
        <IonSearchbar className='searchbar1'></IonSearchbar>
        
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};


function CardSanCristobal() {
  return (
    <IonCard className='card1'>
      <IonRouterLink className='router' routerLink='/san-cristobal'>
        <img alt="San cristobal" src="../src/images/sancristobal.jpg" />
        <IonCardHeader className='card-header1'>
          <IonCardTitle className='title1'>Cerro San Cristobal</IonCardTitle>
          <IonCardSubtitle className='subtitle1'>Dificultad: Moderada</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent></IonCardContent>
      </IonRouterLink>
    </IonCard>
  );
}

function CardLosPeumos() {
  return (
    <IonCard className='card2'>
      <IonRouterLink className='router' routerLink='/los-peumos'>
        <img alt="Los peumos" src="../src/images/lospeumos.jpg" />
        <IonCardHeader className='card-header2'>
          <IonCardTitle className='title2'>Sendero Los Peumos</IonCardTitle>
          <IonCardSubtitle className='subtitle2'>Dificultad: Moderada</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent></IonCardContent>
      </IonRouterLink>
    </IonCard>
  );
}

function CardElCarbon() {
  return (
    <IonCard className='card3'>
      <IonRouterLink className='router' routerLink='/el-carbon'>
        <img alt="El carbon" src="../src/images/elcarbon.jpg" />
        <IonCardHeader className='card-header3'>
          <IonCardTitle className='title3'>Cerro El Carbón</IonCardTitle>
          <IonCardSubtitle className='subtitle3'>Dificultad: Difícil</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent></IonCardContent>
      </IonRouterLink>
    </IonCard>
  );
}

export default Tab2;
