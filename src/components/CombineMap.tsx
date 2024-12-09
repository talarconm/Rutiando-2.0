import React, { useState, useRef, useEffect } from 'react';
import Map, { Marker, GeolocateControl } from 'react-map-gl';
import type { GeolocateControl as MapboxGeolocateControl } from 'mapbox-gl';

const CombinedMapWithGeolocation: React.FC = () => {
    const [viewport, setViewport] = useState({
        longitude: -70.6693, // Ubicación inicial (Santiago, Chile)
        latitude: -33.4489,
        zoom: 12,
        bearing: 0,
        pitch: 0,
    });

    const [userLocation, setUserLocation] = useState<{ longitude: number; latitude: number } | null>(null);
    const geolocateControlRef = useRef<MapboxGeolocateControl | null>(null);

    const token = "pk.eyJ1IjoiZmxvdGFuZGluZyIsImEiOiJjbTRkMWduamgwaWVmMmxvbzl4bWkxbHpkIn0.Id8CPsAupOPXtDpxaib78A";

    useEffect(() => {
        if (geolocateControlRef.current) {
            console.log("GeolocateControl está listo, intentando activar geolocalización...");
            geolocateControlRef.current.trigger();
        } else {
            console.log("GeolocateControl no está disponible.");
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '300px', position: 'relative' }}>
            <Map
                {...viewport}
                onMove={(evt) => {
                    console.log("Movimiento del mapa detectado:", evt.viewState);
                    setViewport(evt.viewState);
                }}
                style={{ width: '100%', height: '300px', overflow: 'hidden' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={token}
                dragPan={true}
                touchZoomRotate={false}
            >
                {/* Marcador inicial (Santiago, Chile) */}
                <Marker longitude={-70.6693} latitude={-33.4489} color="red" />

                {/* Marcador en la ubicación del usuario */}
                {userLocation && (
                    <Marker longitude={userLocation.longitude} latitude={userLocation.latitude} color="blue" />
                )}

                <GeolocateControl
                    ref={geolocateControlRef}
                    position="top-right"
                    trackUserLocation={true}
                    showUserLocation={true}
                    fitBoundsOptions={{
                        maxZoom: 14,
                        padding: { top: 50, bottom: 50, left: 50, right: 50 },
                    }}
                    onGeolocate={(e) => {
                        const { longitude, latitude } = e.coords;
                        console.log("Ubicación detectada:", e.coords);

                        // Almacenar la ubicación del usuario
                        setUserLocation({ longitude, latitude });

                        // Centrar el mapa en la ubicación detectada
                        setViewport((prev) => ({
                            ...prev,
                            longitude,
                            latitude,
                            zoom: 14,
                        }));
                    }}
                    onError={(error) => {
                        console.error("Error al obtener la ubicación:", error);
                        alert("No se pudo obtener tu ubicación. Verifica los permisos.");
                    }}
                />
            </Map>
        </div>
    );
};

export default CombinedMapWithGeolocation;
