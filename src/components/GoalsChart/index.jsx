import './__goalsChart.scss';
import Models from '../../utils/Models';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * Goals Chart Component
 * @param {object} data of sessions
 * @component create a radial bar chart with % of goals reached
 */

export default function GoalsChart({ data }) {
  const model = new Models();
  const dataChart = model.FormatGoals(data);
  return (
    <ResponsiveContainer width={258} height={263} className="radialChart">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="50"
        outerRadius="144"
        barSize={15}
        data={dataChart}
        startAngle={90}
        className="radialChart__container"
      >
        <RadialBar
          minAngle={0}
          label={{ position: 'center', fill: '#74798C', fontSize: 26 }}
          clockWise
          fill="#FF0000"
          dataKey="score"
          cornerRadius="50%"
        />
        <text
          className="title__lineChart"
          width="15"
          dominantBaseline={'hanging'}
          x="24"
          y="14"
          fontSize="15"
          fill="black"
          opacity={1}
        >
          Score
        </text>
        {/* <Legend
          iconSize={0}
          iconType="rect"
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
          fill="#74798C"
        /> */}
        <Legend
          content={
            <div className="radialChart__legend">
              <p className="radialChart__legend-value">{data * 100}% </p>
              <p className="radialChart__legend-label">de votre objectif</p>
            </div>
          }
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

GoalsChart.propTypes = {
  data: PropTypes.object.isRequired,
};
