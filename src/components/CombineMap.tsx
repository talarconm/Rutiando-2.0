import React, { useState } from 'react';
import Map, { Marker, GeolocateControl } from 'react-map-gl';

const CombinedMapWithGeolocation: React.FC = () => {
    const [viewport, setViewport] = useState({
        longitude: -70.6693, // Ubicación inicial (Santiago, Chile)
        latitude: -33.4489,
        zoom: 12,
    });

    const token = "pk.eyJ1IjoiZmxvdGFuZGluZyIsImEiOiJjbTQ0a2s5enEwbjVvMmtweHFvdnh6MnAyIn0.FbyZjodv2V3BOck-PdtFAQ";

    return (
        <Map
            initialViewState={viewport}
            style={{ width: '100%', height: '300px', overflow: 'hidden', position: 'relative' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={token}
            dragPan={true}
            touchZoomRotate={false}
        >
            {/* Marcador de Santiago */}
            <Marker longitude={-70.6693} latitude={-33.4489} color="red" />

            {/* Control de Geolocalización */}
            <GeolocateControl
                position="top-right" // Ubicación del botón en el mapa
                trackUserLocation={true} // Seguir ubicación del usuario en tiempo real
                showUserLocation={true} // Mostrar el punto azul de la ubicación del usuario
            />
        </Map>
    );
};

export default CombinedMapWithGeolocation;
