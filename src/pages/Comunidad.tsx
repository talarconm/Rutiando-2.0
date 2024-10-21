import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle,
  IonToolbar,
  IonSearchbar} from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonHeader collapse="condense">
      </IonHeader>
      <br />
      <IonSearchbar className='searchbar1'></IonSearchbar>
      <IonTitle>Comunidad</IonTitle>
      </IonContent>
      
    </IonPage>
  );
};

export default Tab3;
