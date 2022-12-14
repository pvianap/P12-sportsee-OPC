import './__radarChart.scss';
import React from 'react';
import Models from '../../utils/Models';
import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  RadarChart,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * Performance Chart
 * @param {object} data of performance of user
 * @component create a radar chart with 6 elements of performance (Intensity, Cardio, Energie, Endurence, Force, Speed)
 */
export default function RadarCharts({ data }) {
  const model = new Models();
  const performances = model.FormatRadar(data);
  return (
    <div className="chart__radar">
      <ResponsiveContainer width={258} height={263}>
        <RadarChart data={performances.reverse()} outerRadius={90}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="white"
            dy={4}
            tickLine={false}
            tick={{
              fontSize: 10,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
            stroke="transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarCharts.propTypes = {
  data: PropTypes.object.isRequired,
};
