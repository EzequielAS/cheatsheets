import { ViewBox } from '../components/ViewBox'
import { Header } from '../components/Header'
import { SummaryTable } from '../cases/SummaryTable'

export function SummaryTablePage() {
  return (
    <ViewBox>
      <Header title="Summary Table" />
      <SummaryTable />
    </ViewBox>
  )
}
