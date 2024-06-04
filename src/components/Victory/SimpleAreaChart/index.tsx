import React from "react";
import { VictoryArea, VictoryChart, VictoryTheme } from "victory";

export default function SimpleAreaChart(): JSX.Element {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
    >
      <VictoryArea
        style={{ data: { fill: "#c43a31" } }}
        data={[
          { x: 1, y: 2, y0: 0 },
          { x: 2, y: 3, y0: 1 },
          { x: 3, y: 5, y0: 1 },
          { x: 4, y: 4, y0: 2 },
          { x: 5, y: 6, y0: 2 }
        ]}
      />
    </VictoryChart>
  )
}