import { React, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './about.scss';

export default function About() {
  return (
    <Fragment>
      <div className="error">
        <h1 className="error__title">404</h1>
        <p className="error__msg">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/">
          <p>Retourner sur la page d'accueil</p>
        </Link>
      </div>
    </Fragment>
  );
}
