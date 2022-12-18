import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../utils/api';

import DailyActivity from '../../components/DailyActivity';
import AvgSession from '../../components/Avgsession';
import RadarChart from '../../components/RadarChart';
import GoalsChart from '../../components/GoalsChart';
import NutritionIcon from '../../components/NutritionIcon';
import Loading from '../Loading';
import NotFound from '../NotFound';
import './__dashboard.scss';

/**
 *
 * @param {object} userData object group user infos as { user, activity, averageSessions, performance }
 * @component dashboard page of application with sport activities of user
 */

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [pageState, setPageState] = useState('Loading');
  const errorHandle = (err) => {
    console.log('Error : ', err);
    setPageState('NotFound');
  };
  const resHandle = (res) => {
    // console.log('Success res: ', res);
    if (res.user === undefined) {
      return errorHandle('User was not found');
    } else {
      setUserData(res);
      setPageState('Success');
    }
  };
  const { id } = useParams();
  useEffect(
    () => {
      getUserData(id)
        .then((res) => resHandle(res))
        .catch((err) => errorHandle(err));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  function Content() {
    switch (pageState) {
      case 'Loading':
        return <Loading />;
      case 'NotFound':
        return <NotFound />;
      case 'Success':
        return (
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
      default:
        console.log('Impossible');
    }
  }
  return <Content />;
}
