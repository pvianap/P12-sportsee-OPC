import { Fragment } from 'react';
import DailyActivity from '../../components/DailyActivity';
import AvgSession from '../../components/Avgsession';
import RadarChart from '../../components/RadarChart';
import GoalsChart from '../../components/GoalsChart';
import NutritionIcon from '../../components/NutritionIcon';
import './__dashboard.scss';

/**
 *
 * @param {object} data object group user infos as { user, activity, averageSessions, performance }
 * @component dashboard page of application with sport activities of user
 */

export default function Dashboard({ data }) {
  console.log(data);
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
          <DailyActivity data={data.activity} />
          <AvgSession data={data.averageSessions} />
          <RadarChart data={data.performance} />
          <GoalsChart data={data.user.todayScore} />
        </div>
        <div className="dashboard__nutrituionContainer">
          <NutritionIcon type="calories" data={data.user.keyData} />
          <NutritionIcon type="proteines" data={data.user.keyData} />
          <NutritionIcon type="glucides" data={data.user.keyData} />
          <NutritionIcon type="lipides" data={data.user.keyData} />
        </div>
      </div>
    </Fragment>
  );
}
