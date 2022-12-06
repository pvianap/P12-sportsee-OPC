import React, { Fragment } from 'react';
import Logo from '../../assets/logo.png';
import './_navbar.scss';

/**
 * Navbar of app
 * @component top navbar with links for Homepage, Profile page, Réglage, Comunity.
 */

export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar">
        <img src={Logo} alt="logo of sportsee" />
        <ul className="navbar__list">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </Fragment>
  );
}
