import { Fragment } from 'react';

import './__dashboard.scss';

export default function Dashboard({ data }) {
  return (
    <Fragment>
      <div className="dashboard">
        <div className="dashboard__header">
          <div className="dashboard__header__title">
            <h1>Bonjour</h1>
            <h2 className="dashboard__userName">{data.userInfos.firstName}</h2>
          </div>
          <p>Félicitation! Vous avez explosé vos objectifs hier 👏 </p>
        </div>
        <div className="dashboard__chartContainer">Charts</div>
        <div className="dashboard__nutrituionContainer">Nutris</div>
      </div>
    </Fragment>
  );
}
