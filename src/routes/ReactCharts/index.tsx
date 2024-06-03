import React from 'react'
import Page from '../../components/Page'
import ChartGrid from '../../components/ChartGrid'
import { SimpleBarGroupedChart } from '../../components/ReactCharts/SimpleBarGroupedChart'
import { SimpleBarHorizontalChart } from '../../components/ReactCharts/SimpleBarHorizontalChart'
import { SimpleBarVerticalChart } from '../../components/ReactCharts/SimpleBarVerticalChart'
import { SimpleBarStackedChart } from '../../components/ReactCharts/SimpleBarStackedChart'
import { SimpleScatterChart } from '../../components/ReactCharts/SimpleScatterChart'
import { SimpleRaderChart } from '../../components/ReactCharts/SimpleRaderChart'
import { SimplePolarAreaChart } from '../../components/ReactCharts/SimplePolarAreaChart'
import { SimplePieChart } from '../../components/ReactCharts/SimplePieChart'
import { SimpleMultiAxisLineChart } from '../../components/ReactCharts/SimpleMultiAxisLineChart'
import { SimpleLineChart } from '../../components/ReactCharts/SimpleLineChart'
import { SimpleAreaLineChart } from '../../components/ReactCharts/SimpleAreaLineChart'
import { SimpleDoughnutChart } from '../../components/ReactCharts/SimpleDoughnutChart'
import { SimpleMultiTypeChart } from '../../components/ReactCharts/SimpleMultiTypeChart'
import { SimpleBubbleChart } from '../../components/ReactCharts/SimpleBubbleChart'

export default function ReactCharts() {
  return (
    <Page
      title='React Charts.js 2'
    >
      <p>The <a href='https://react-chartjs-2.js.org/'>React Charts.js 2</a> library</p>
      <ChartGrid
        charts={[
          {
            title: 'Simple Bar Grouped Chart',
            element: <SimpleBarGroupedChart/>
          },
          {
            title: 'Simple Bar Horizontal Chart',
            element: <SimpleBarHorizontalChart/>
          },
          {
            title: 'Simple Bar Vertical Chart',
            element: <SimpleBarVerticalChart/>
          },
          {
            title: 'Simple Bar Stacked Chart',
            element: <SimpleBarStackedChart/>
          },
          {
            title: 'Simple Scatter Chart',
            element: <SimpleScatterChart/>
          },
          {
            title: 'Simple Rader Chart',
            element: <SimpleRaderChart/>
          },
          {
            title: 'Simple Polar Area Chart',
            element: <SimplePolarAreaChart/>
          },
          {
            title: 'Simple Pie Chart',
            element: <SimplePieChart/>
          },
          {
            title: 'Simple Multi Axis Line Chart',
            element: <SimpleMultiAxisLineChart/>
          },
          {
            title: 'Simple Line Chart',
            element: <SimpleLineChart/>
          },
          {
            title: 'Simple Area Line Chart',
            element: <SimpleAreaLineChart/>
          },
          {
            title: 'Simple Doughnut Chart',
            element: <SimpleDoughnutChart/>
          },
          {
            title: 'Simple Multi Type Chart',
            element: <SimpleMultiTypeChart/>
          },
          {
            title: 'Simple Bubble Chart',
            element: <SimpleBubbleChart/>
          }
        ]}
      />
    </Page>
  )
}