import { ViewBox } from '../components/ViewBox'
import { PieChart } from '../cases/PieChart'
import { Header } from '../components/Header'

export function PieChartPage() {
  return (
    <ViewBox>
      <Header title="PieChart" />
      <PieChart />
    </ViewBox>
  )
}
