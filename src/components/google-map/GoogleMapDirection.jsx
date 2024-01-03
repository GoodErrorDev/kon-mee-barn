import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

let MAP_API_KEY = 'AIzaSyDrneXTBRtQzYbNyL61jEPoFLp79cMqc-4';
const containerStyle = {
    width: '100%',
    height: '400px'
};
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by your browser'));
        } else {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        }
    });
}

function GoogleMapDirectionComponent() {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null);

    useEffect(() => {
        getCurrentLocation().then(position => {
            setCurrentLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        }).catch(error => {
            // Handle error or prompt user to enable location
        });
    }, []);

    const destination = {
        lat: 13.096918,
        lng: 100.903897
    }; // Set destination point

    const directionsCallback = response => {
        if (response !== null) {
            if (response.status === 'OK') {
                setDirectionsResponse(response);
            } else {
                console.error('Directions request failed due to ' + response.status);
            }
        }
    };

    return (
        <LoadScript googleMapsApiKey={MAP_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentLocation || destination}
                zoom={14}
            >
                {currentLocation && (
                    <DirectionsService
                        options={{
                            origin: currentLocation,
                            destination: destination,
                            travelMode: 'DRIVING'
                        }}
                        callback={directionsCallback}
                    />
                )}

                {directionsResponse && (
                    <DirectionsRenderer
                        options={{
                            directions: directionsResponse
                        }}
                    />
                )}
            </GoogleMap>
        </LoadScript>
    );
}

export default GoogleMapDirectionComponent;
