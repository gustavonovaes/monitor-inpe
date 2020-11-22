import React from 'react';
import GoogleMapReact from 'google-map-react';

import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';


const Map = ({ center: defaultCenter, zoom: defaultZoom, markers }) => {
  const [center, setCenter] = React.useState(defaultCenter);
  const [zoom, setZoom] = React.useState(defaultZoom);

  const [locationInfo, setLocationInfo] = React.useState(null);

  const GOOGLE_MAP_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GOOGLE_MAP_KEY,
        }}
        center={center}
        zoom={zoom}
      >
        {markers.map((marker) => (
          <LocationMarker
            key={marker.id}
            lat={marker.lat}
            lng={marker.lng}
            onClick={() => {
              setLocationInfo(marker);
            }}
          />
        ))}
      </GoogleMapReact>

      {locationInfo && (
        <LocationInfo
          info={locationInfo}
          onFocus={(marker) => {
            setCenter({
              lat: marker.geometry.coordinates[1],
              lng: marker.geometry.coordinates[0],
            });

            setZoom(18);
          }}
        />
      )}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lng: -34.900002,
    lat: -8.05,
  },
  zoom: 6,
  markers: [],
};

export default Map;
