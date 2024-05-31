import { ReactNode } from "react"

export interface ChartGridProps {
  charts: Chart[]
}

export interface Chart {
  title: string,
  element: ReactNode
}