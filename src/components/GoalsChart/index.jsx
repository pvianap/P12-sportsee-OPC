import './__goalsChart.scss';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
export default function GoalsChart({ data }) {
  console.log('Data arrived: ', data);

  const dataChart = [
    {
      name: 'de votre objectif',
      score: data,
      fill: '#8884d8',
    },
  ];

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };
  console.log('Goals: ', data);
  return (
    <ResponsiveContainer width={258} height={263}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="80%"
        barSize={10}
        data={dataChart}
      >
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          clockWise
          dataKey="score"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

GoalsChart.propTypes = {
  data: PropTypes.object.isRequired,
};
