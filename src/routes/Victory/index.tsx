import React from 'react'
import Page from '../../components/Page'
import ChartGrid from '../../components/ChartGrid'
import SimpleAreaChart from '../../components/Victory/SimpleAreaChart'
import SimpleBarChart from '../../components/Victory/SimpleBarChart'
import SimpleBoxPlotChart from '../../components/Victory/SimpleBoxPlotChart'
import SimpleCandleStickChart from '../../components/Victory/SimpleCandleStickChart'
import SimpleErrorBarChart from '../../components/Victory/SimpleErrorBarChart'
import SimpleHistogramChart from '../../components/Victory/SimpleHistogramChart'
import SimpleLineChart from '../../components/Victory/SimpleLineChart'
import SimplePieChart from '../../components/Victory/SimplePieChart'
import SimplePolarAxisChart from '../../components/Victory/SimplePolarAxisChart'
import SimpleScatterChart from '../../components/Victory/SimpleScatterChart'
import SimpleVoronoiChart from '../../components/Victory/SimpleVoronoiChart'

export default function Victory() {
  return (
    <Page
      title='Victory'
    >
      <p>The <a href='https://commerce.nearform.com/open-source/victory'>Victory</a> library</p>
      <ChartGrid
        charts={[
          {
            title: 'Simple AreaChart',
            element: <SimpleAreaChart/>
          },
          {
            title: 'Simple Bar Chart',
            element: <SimpleBarChart/>
          },
          {
            title: 'Simple Blox Plot',
            element: <SimpleBoxPlotChart/>
          },
          {
            title: 'Simple Candle Stick Chart',
            element: <SimpleCandleStickChart/>
          },
          {
            title: 'Simple Error Bar Chart',
            element: <SimpleErrorBarChart/>
          },
          {
            title: 'Simple Histogram Chart',
            element: <SimpleHistogramChart/>
          },
          {
            title: 'Simple Line Chart',
            element: <SimpleLineChart/>
          },
          {
            title: 'Simple Pie Chart',
            element: <SimplePieChart/>
          },
          {
            title: 'Simple Polar Axis Chart',
            element: <SimplePolarAxisChart/>
          },
          {
            title: 'Simple Scatter Chart',
            element: <SimpleScatterChart/>
          }
          ,
          {
            title: 'Simple Voronoi Chart',
            element: <SimpleVoronoiChart/>
          }
        ]}
      />
    </Page>
  )
}