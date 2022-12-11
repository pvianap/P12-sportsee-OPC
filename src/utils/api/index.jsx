import axios from 'axios';
import mockedData from './mock';

/**
 * @param {number} user Id
 * @return {object} this object group user infos as { user, activity, averageSessions, performance }
 */

export async function getUserData(userId) {
  const url = 'https://p12-sportsee-opc-backend.onrender.com/user/';
  try {
    const user = await axios.get(url + userId).then((res) => res.data.data);
    const activity = await axios
      .get(url + userId + '/activity')
      .then((res) => res.data.data);
    const averageSessions = await axios
      .get(url + userId + '/average-sessions')
      .then((res) => res.data.data);
    const performance = await axios
      .get(url + userId + '/performance')
      .then((res) => res.data.data);

    return { user, activity, averageSessions, performance };
  } catch (error) {
    return MockedData(userId);
  }
}

function MockedData(id) {
  const userId = parseInt(id);

  const user = mockedData.USER_MAIN_DATA.filter(
    (user) => user.id === userId
  ).shift();
  const activity = mockedData.USER_ACTIVITY.filter(
    (userActivity) => userActivity.userId === userId
  ).shift();
  const averageSessions = mockedData.USER_AVERAGE_SESSIONS.filter(
    (userActivity) => userActivity.userId === userId
  ).shift();
  const performance = mockedData.USER_PERFORMANCE.filter(
    (userPerformance) => userPerformance.userId === userId
  ).shift();
  console.log(
    'Mocked activate',
    mockedData.USER_MAIN_DATA.filter((e) => e.id === userId)
  );
  console.log();

  return { user, activity, averageSessions, performance };
}

// http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
// http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
// http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
// http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
// Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

// 4.2 Examples of queries
// http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
// http://localhost:3000/user/18 - Retrieves user 18's main information.
