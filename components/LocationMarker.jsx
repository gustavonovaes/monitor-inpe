import React from 'react';

import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ feature, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location-marker__icon" />
    </div>
  );
};

export default LocationMarker;
