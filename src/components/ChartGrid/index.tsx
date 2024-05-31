import { ChartGridProps } from "./type"
import './style.scss'

export default function ChartGrid({
  charts
}: ChartGridProps){
  return (
    <div className="chart-grid">
      {charts.map((c,index) => {
        return (
          <section key={"chart_grid_section_" + index}>
            <label>{c.title}</label>
            {c.element}
          </section>
        )
      })}
    </div>
  )
}