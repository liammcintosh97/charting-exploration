import React from 'react'
import Page from '../../components/Page'
import SimpleLineChart from '../../components/ReCharts/SimpleLineChart'
import ChartGrid from '../../components/ChartGrid'
import SimpleAreaChart from '../../components/ReCharts/SimpleAreaChart/indes'
import SimpleBarChart from '../../components/ReCharts/SimpleBarChart'
import SimpleComposedChart from '../../components/ReCharts/SimpleComposedChart'
import SimpleScatterChart from '../../components/ReCharts/SimpleScatterChart'
import SimplePieChart from '../../components/ReCharts/SimplePieChart'
import SimpleRadarChart from '../../components/ReCharts/SimpleRadarChart'
import SimpleRadialBarChart from '../../components/ReCharts/SimpleRadialBarChart'
import SimpleTreeMap from '../../components/ReCharts/SimpleTreeMap'
import CustomContentOfToolTip from '../../components/ReCharts/CustomContentOfToolTip'

export default function ReCharts() {
  return (
    <Page
      title='ReCharts'
    >
      <p>The <a href='https://recharts.org/'>ReCharts</a> library</p>
      <ChartGrid
        charts={[
          {
            title: "Simple Line Chart",
            element: <SimpleLineChart/>
          },
          {
            title: "Simple Area Chart",
            element: <SimpleAreaChart/>
          },
          {
            title: "Simple Bar Chart",
            element: <SimpleBarChart/>
          },
          {
            title: "Simple Composed Chart",
            element: <SimpleComposedChart/>
          },
          {
            title: "Simple Scatter Chart",
            element: <SimpleScatterChart/>
          },
          {
            title: "Simple Pie Chart",
            element: <SimplePieChart/>
          },
          {
            title: "Simple Radar Chart",
            element: <SimpleRadarChart/>
          },
          {
            title: "Simple Radial Bar Chart",
            element: <SimpleRadialBarChart/>
          },
          {
            title: "Simple Treemap",
            element: <SimpleTreeMap/>
          },
          {
            title: "Custom ToolTip",
            element: <CustomContentOfToolTip/>
          }
        ]}
      />
    </Page>
  )
}