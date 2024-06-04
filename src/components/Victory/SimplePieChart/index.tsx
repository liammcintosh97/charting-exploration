import React from "react";
import { VictoryPie } from "victory";

export default function SimplePieChart(): JSX.Element {
  return (
    <VictoryPie
      data={[
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 }
      ]}
    />
  )
}