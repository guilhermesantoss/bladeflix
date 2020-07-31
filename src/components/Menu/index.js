import React from 'react';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import Logo from '../../assets/img/Logo.png';

import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Bladeflix Logo"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;