import './__avgSession.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * Average Session Duration
 * @param {object} data of sessions
 * @component line chart component with average duration of sessions
 */
export default function AvgSession({ data }) {
  // Adaptation of data
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const sessions = data.sessions.map((s, i) => ({
    ...s,
    letter: days[i],
  }));

  //Custom tooltip

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p className="label">{payload[0].value} min</p>
        </div>
      );
    }

    return null;
  };

  //Custom cursor
  function CustomizedCursor({ points }) {
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        x={points[1].x}
        width={500}
        height={300}
      />
    );
  }
  return (
    <div className="chart__session">
      <ResponsiveContainer width={258} height={263} className="chartAvg">
        <LineChart
          data={sessions}
          margin={{ top: 40, right: 0, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="gradientLine" x="0" x2="0.8" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity={0.3} />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#gradientLine)"
            strokeOpacity={1}
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255, 255, 255, 0.5)',
              strokeWidth: 10,
              r: 5,
            }}
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
          <Tooltip cursor={<CustomizedCursor />} content={<CustomTooltip />} />
          onMouseMove={(e) => {}}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AvgSession.propTypes = {
  session: PropTypes.object.isRequired,
};
