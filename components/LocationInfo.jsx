import React from 'react';

import format from 'date-fns/format';

import { Icon } from '@iconify/react';
import focusIcon from '@iconify/icons-mdi/map-marker';

const LocationInfo = ({ info, onFocus }) => {
  const dataHora = new Date(info.properties.data_hora_gmt);

  return (
    <div className="location-info">
      <h2>Informações</h2>
      <ul>
        <li>
          DATA/HORA: <strong>{format(dataHora, 'dd/mm/yyyy HH:II')}</strong>
        </li>
        <li>
          MUNICÍPIO: <strong>{info.properties.municipio}</strong>
        </li>
        <li>
          ESTADO: <strong>{info.properties.estado}</strong>
        </li>
        <li>
          SATÉLITE: <strong>{info.properties.satelite}</strong>
        </li>
      </ul>

      <button className="focus" onClick={() => onFocus(info)}>
        <Icon icon={focusIcon} />
      </button>
    </div>
  );
};

export default LocationInfo;
