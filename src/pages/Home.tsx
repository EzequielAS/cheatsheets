import { ViewBox } from '../components/ViewBox'
import { Button } from '../components/Button'
import { Header } from '../components/Header'

export function Home() {
  return (
    <ViewBox>
      <Header title="Cheetsheets" />
      <Button to="/piechart">PieChart</Button>
      <Button to="/hashover">:has with :hover animation</Button>
    </ViewBox>
  )
}
