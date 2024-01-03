import {React,useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
let MAP_API_KEY = 'AIzaSyDrneXTBRtQzYbNyL61jEPoFLp79cMqc-4';

const containerStyle = {
    width: '400px',
    height: '400px'
};
//13.096918, 100.903897


const center = {
    lat: 13.096918,
    lng: 100.903897
};
const markers = [
    {
        id: 1,
        name: "Mitsubishi",
        position: {
            lat: 13.096918,
            lng: 100.903897
        },
    }
];
function GoogleMapComponent() {

    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    return (
        <LoadScript
            googleMapsApiKey={MAP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {markers.map(({ id, name, position }) => (
                    <MarkerF
                        key={id}
                        position={position}
                        onClick={() => handleActiveMarker(id)}
                    // icon={{
                    //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                    //   scaledSize: { width: 50, height: 50 }
                    // }}
                    >
                        {activeMarker === id ? (
                            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                <div>
                                    <p>{name}</p>
                                </div>
                            </InfoWindowF>
                        ) : null}
                    </MarkerF>
                ))}
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMapComponent;
