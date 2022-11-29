import './__radarChart.scss';
import React from 'react';

import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  RadarChart,
} from 'recharts';
import PropTypes from 'prop-types';

export default function RadarCharts({ data }) {
  const performances = data.data.map((e) => ({
    subject: data.kind[e.kind],
    value: e.value,
  }));

  return (
    <div className="chart__radar">
      <ResponsiveContainer width={258} height={263}>
        <RadarChart data={performances} outerRadius={90}>
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
