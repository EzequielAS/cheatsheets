import { Routes as Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { PieChartPage } from './pages/PieChart'
import { HasHoverPage } from './pages/HasHover'
import { SummaryTablePage } from './pages/SummaryTable'
import { ScrollAnimationsPage } from './pages/ScrollAnimations'

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/piechart" element={<PieChartPage />} />
      <Route path="/hashover" element={<HasHoverPage />} />
      <Route path="/summarytable" element={<SummaryTablePage />} />
      <Route path="/scrollanimations" element={<ScrollAnimationsPage />} />
    </Switch>
  )
}
