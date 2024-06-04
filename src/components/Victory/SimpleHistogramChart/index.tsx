import React from "react";
import {VictoryChart, VictoryHistogram } from "victory";

export default function SimpleHistogramChart(): JSX.Element {
  return (
    <VictoryChart
      domainPadding={10}
    >
      <VictoryHistogram
        style={{ data: { fill: "#c43a31" } }}
        data={[
          { x: 1 },
          { x: 2 },
          { x: 2 },
          { x: 4 },
          { x: 4 },
          { x: 5 }
        ]}
      />
    </VictoryChart>
  )
}