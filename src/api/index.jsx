import axios from 'axios';

export async function getUserData(userId) {
  const url = 'http://localhost:3000/user/';
  try {
    const response = await axios.get(url + userId);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

// http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
// http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
// http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
// http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
// Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

// 4.2 Examples of queries
// http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
// http://localhost:3000/user/18 - Retrieves user 18's main information.
