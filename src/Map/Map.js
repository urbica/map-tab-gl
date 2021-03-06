import React from 'react';
import MapGL from '@urbica/react-map-gl';
import config from '../config.json';

const Map = (props) => {
  const {
    changeCoordinates,
    coordinates,
    styleId,
    zoom
   } = props;

  return (
    <MapGL
      style={{ width: '100%', height: '100vh' }}
      accessToken={config.accessToken}
      mapStyle={`mapbox://styles/maptab/${styleId}`}
      latitude={coordinates[1]}
      longitude={coordinates[0]}
      zoom={zoom}
      onViewportChange={viewport => {
        const { latitude, longitude, zoom } = viewport;
        changeCoordinates([longitude, latitude], zoom);
      }}
    />
  );
};


export default Map;
