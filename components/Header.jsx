import React from 'react';

import Icon from '@iconify/react';
import iconFireAlert from '@iconify/icons-mdi/fire-alert';
import iconLink from '@iconify/icons-mdi/link';

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <Icon icon={iconFireAlert} width={38} className="icon-fire" />
      </a>

      <div className="title">
        <p>Monitoramento Queimadas</p>
        <small>(Últimas 48 horas)</small>
      </div>

      <a
        target="_blank nore"
        rel="noopener noreferrer"
        href="http://queimadas.dgi.inpe.br/queimadas/dados-abertos/"
        title="Dados do INPE"
      >
        <Icon icon={iconLink} width={38} />
      </a>
    </header>
  );
};

export default Header;
