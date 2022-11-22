import { Fragment } from 'react';
// import DailyActivity from '../../components/DailyActivity';
import AvgSession from '../../components/Avgsession';
import RadarChart from '../../components/RadarChart';
import GoalsChart from '../../components/GoalsChart';
import './__dashboard.scss';

export default function Dashboard({ data }) {
  return (
    <Fragment>
      <div className="dashboard">
        <div className="dashboard__header">
          <div className="dashboard__header__title">
            <p>Bonjour</p>
            <p className="dashboard__header__title__userName">
              {data.user.userInfos.firstName}
            </p>
          </div>
          <p className="dashboard__header__subtitle">
            Félicitation! Vous avez explosé vos objectifs hier 👏{' '}
          </p>
        </div>
        <div className="dashboard__chartContainer">
          {/* <DailyActivity data={data.activity} /> */}
          <AvgSession data={data.averageSessions} />
          <RadarChart data={data.performance} />
          <GoalsChart data={data.user.todayScore} />
        </div>
        <div className="dashboard__nutrituionContainer">Nutris</div>
      </div>
    </Fragment>
  );
}
