import React from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";

export default function SimpleBarChart(): JSX.Element {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={10}
    >
      <VictoryBar
        style={{ data: { fill: "#c43a31" } }}
        data={[
          { x: 1, y: 2, y0: 1 },
          { x: 2, y: 3, y0: 2 },
          { x: 3, y: 5, y0: 2 },
          { x: 4, y: 4, y0: 3 },
          { x: 5, y: 6, y0: 3 }
        ]}
      />
    </VictoryChart>
  )
}