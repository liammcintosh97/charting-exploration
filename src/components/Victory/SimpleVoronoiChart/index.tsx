import React from "react";
import { VictoryChart, VictoryTheme, VictoryVoronoi } from "victory";

export default function SimpleVoronoiChart(): JSX.Element {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domain={{ x: [0, 5], y: [0, 7] }}
    >
      <VictoryVoronoi
        style={{ data: { stroke: "#c43a31", strokeWidth: 2 } }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 }
        ]}
      />
    </VictoryChart>
  )
}