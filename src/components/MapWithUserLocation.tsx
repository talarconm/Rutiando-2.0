import React, { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';

const MapWithUserLocation: React.FC = () => {
    const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => console.error("Error obteniendo la ubicación", error)
        );
    }, []);

    return (
        <Map
            initialViewState={{
                longitude: userLocation?.lng || -70.6693,
                latitude: userLocation?.lat || -33.4489,
                zoom: 12,
            }}
            style={{ width: '100%', height: '300px', overflow: 'hidden', position: 'relative' }}

            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken="pk.eyJ1IjoiZmxvdGFuZGluZyIsImEiOiJjbTQ0a2s5enEwbjVvMmtweHFvdnh6MnAyIn0.FbyZjodv2V3BOck-PdtFAQ"
        >
            {userLocation && <Marker longitude={userLocation.lng} latitude={userLocation.lat} color="blue" />}
        </Map>
    );
};

export default MapWithUserLocation;
