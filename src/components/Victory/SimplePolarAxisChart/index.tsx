import React from "react";
import { VictoryPolarAxis, VictoryTheme } from "victory";

export default function SimplePolarAxisChart(): JSX.Element {
  return (
    <svg width={400} height={400}>
      <VictoryPolarAxis
        width={400}
        height={400}
        theme={VictoryTheme.material}
        standalone={false}
      />
      <VictoryPolarAxis dependentAxis
        width={400}
        height={400}
        domain={[0, 10]}
        theme={VictoryTheme.material}
        standalone={false}
      />
    </svg>
  )
}