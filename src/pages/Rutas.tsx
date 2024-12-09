import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSpinner,
  IonText,
} from '@ionic/react';
import { useState, useEffect } from 'react';
import { Geolocation } from '@capacitor/geolocation';
import axios from 'axios';
import Publicacion from '../components/Publicacion';
import '../theme/variables.css';

const Tab2: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener el clima
  const fetchWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      // Obtener la ubicación actual del usuario
      const position = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = position.coords;

      // API Key de WeatherAPI
      const API_KEY = '86cf79b864024737bc4201820242905';
      const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&lang=es`;

      // Solicitar clima
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (err) {
      console.error('Error al obtener el clima:', err);
      setError('No se pudo obtener el clima. Verifica los permisos de ubicación o tu conexión.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <IonPage>
      <IonHeader collapse="condense"></IonHeader>
      <IonContent fullscreen>
        <IonSearchbar className="searchbar1" />
        <IonTitle className="ion-tex-inicio">Clima Actual</IonTitle>

        {/* Clima */}
        <div style={{ padding: '16px' }}>
          {loading ? (
            <IonSpinner name="crescent" />
          ) : error ? (
            <IonText color="danger">{error}</IonText>
          ) : weather ? (
<IonCard className="weather-card">
  <IonCardHeader>
    <IonCardTitle className="weather-title">Clima en {weather.location.name}</IonCardTitle>
  </IonCardHeader>
  <IonCardContent>
    <div className="weather-details">
      <p>
        <strong>🌡️ Temperatura:</strong> {weather.current.temp_c}°C
      </p>
      <p>
        <strong>☀️ Clima:</strong> {weather.current.condition.text}
      </p>
      <p>
        <strong>💧 Humedad:</strong> {weather.current.humidity}%
      </p>
      
    </div>
    <div className="weather-icon">

    </div>
  </IonCardContent>
</IonCard>


          ) : (
            <p>No hay datos disponibles.</p>
          )}
        </div>

        {/* Rutas populares */}
        <IonTitle className="ion-tex-inicio">Rutas populares</IonTitle>
        <div>
          <Publicacion
            imagenSrc="https://i.ibb.co/bRhB9DB/lospeumos.jpg"
            titulo="Sendero Los Peumos"
            subtitulo="Dificultad: Moderada"
            chips={['Senderismo', 'Familiar', 'Vista', 'Rocoso', 'Río']}
            descripcion={
              'El sendero Los Peumos es una de las opciones de senderos que pueden recorrer en el Parque Natural Aguas de Ramón...'
            }
            rating={4.5}
          />
        </div>
        <div>
          <Publicacion
            imagenSrc="https://i.ibb.co/HpWpxV4/sancristobal.jpg"
            titulo="Cerro San Cristobal"
            subtitulo="Dificultad: Moderada"
            chips={['PetFriendly', 'Familiar', 'Vista', 'Ciclismo']}
            descripcion={
              'La segunda montaña más alta de la ciudad, es un sitio muy visitado para realizar caminatas, andar en bicicleta...'
            }
            rating={4}
          />
        </div>
        <div>
          <Publicacion
            imagenSrc="https://i.ibb.co/3dpkkJ7/elcarbon.jpg"
            titulo="Cero El Carbón"
            subtitulo="Dificultad: Difícil"
            chips={['PetFriendly', 'Vista', 'Ciclismo', 'Running']}
            descripcion={
              'Disfruta esta ruta de ida y vuelta de 3.7-millas cerca de Vitacura, Santiago. Considerada una ruta difícil...'
            }
            rating={3}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
