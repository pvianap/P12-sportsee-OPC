import './__dailyactivity.scss';
import {
  ResponsiveContainer,
  BarChart,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * Activity Chart
 * @param {object} data of sessions
 * @component bar chart with weight and carbs of user
 */
export default function DailyActivity({ data }) {
  const dataChart = data.sessions.map((e, i) => ({
    day: i + 1,
    date: e.day,
    weight: e.kilogram,
    cal: e.calories,
  }));
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kcal`}</p>
        </div>
      );
    }
  };
  return (
    <div className="dailyActivity">
      <div className="dailyActivity__title">
        <h2>Activité quotidienne</h2>
        <ul className="dailyActivity__legend">
          <li style={{ color: 'black' }}>
            <span>Poids (kg)</span>
          </li>
          <li style={{ color: 'red' }}>
            <span>Calories brûlées (kCal)</span>
          </li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          width={500}
          height={300}
          data={dataChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={15}
          barGap={15}
        >
          <YAxis
            tickCount={3}
            orientation="right"
            tickLine={false}
            axisLine={false}
          />
          <XAxis dataKey="day" dy={16} fontSize={14} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid vertical={false} strokeDasharray="4 1" />

          <Bar
            name="Poids (kg)"
            dataKey="weight"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            width={10}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="cal"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

DailyActivity.propTypes = {
  dataChart: PropTypes.object.isRequired,
};
