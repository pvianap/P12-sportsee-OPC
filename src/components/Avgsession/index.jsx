import './__avgSession.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

export default function AvgSession({ data }) {
  // Adaptation of data
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const sessions = data.sessions.map((s, i) => ({
    ...s,
    letter: days[i],
  }));

  //Custon tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].value}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="chart__session">
      <ResponsiveContainer width={258} height={263} className="chart">
        <LineChart
          data={sessions}
          margin={{ top: 80, right: 0, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="gradientLine" x="0" x2="0.8" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity={0.3} />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="url(#gradientLine)"
            strokeOpacity={1}
            strokeWidth={2}
            dot={
              CustomTooltip.active
                ? {
                    strokeWidth: 2,
                  }
                : { stroke: 'blue', strokeWidth: 0, r: 0, strokeDasharray: '' }
            }
          />
          <YAxis hide={true} domain={['dataMin -15', 'dataMax + 45']} />

          <text
            className="title__lineChart"
            width="15"
            dominantBaseline={'hanging'}
            x="15"
            y="15"
            fontSize="15"
            fill="white"
            opacity={0.55}
          >
            Durée moyenne des sessions
          </text>
          <XAxis
            dataKey="letter"
            stroke="rgba(255, 255, 255, 0.6)"
            tick={{ fontSize: 12, fill: 'white' }}
            tickLine={false}
            axisLine={false}
            opacity={0.6}
            interval="preserveStartEnd"
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AvgSession.propTypes = {
  session: PropTypes.object.isRequired,
};
