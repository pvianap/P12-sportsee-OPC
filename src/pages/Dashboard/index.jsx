import { Fragment } from 'react';
import DailyActivity from '../../components/DailyActivity';
import AvgSession from '../../components/Avgsession';
import RadarChart from '../../components/RadarChart';
import GoalsChart from '../../components/GoalsChart';
import NutritionIcon from '../../components/NutritionIcon';
import Loading from '../Loading';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../utils/api';
import './__dashboard.scss';

/**
 *
 * @param {object} userData object group user infos as { user, activity, averageSessions, performance }
 * @component dashboard page of application with sport activities of user
 */

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getUserData(id)
      .then((res) => setUserData(res))
      .catch((err) => console.log(err));
  }, []);
  return !userData ? (
    <Loading />
  ) : (
    <Fragment>
      <div className="dashboard">
        <div className="dashboard__header">
          <div className="dashboard__header__title">
            <p>Bonjour</p>
            <p className="dashboard__header__title__userName">
              {userData.user.userInfos.firstName}
            </p>
          </div>
          <p className="dashboard__header__subtitle">
            Félicitation! Vous avez explosé vos objectifs hier 👏{' '}
          </p>
        </div>
        <div className="dashboard__chartContainer">
          <DailyActivity data={userData.activity} />
          <AvgSession data={userData.averageSessions} />
          <RadarChart data={userData.performance} />
          <GoalsChart data={userData.user.todayScore} />
        </div>
        <div className="dashboard__nutrituionContainer">
          <NutritionIcon type="calories" data={userData.user.keyData} />
          <NutritionIcon type="proteines" data={userData.user.keyData} />
          <NutritionIcon type="glucides" data={userData.user.keyData} />
          <NutritionIcon type="lipides" data={userData.user.keyData} />
        </div>
      </div>
    </Fragment>
  );
}
