import { ScrollAnimations } from '../cases/ScrollAnimations'
import { Header } from '../components/Header'
import { ViewBox } from '../components/ViewBox'

export function ScrollAnimationsPage() {
  return (
    <ViewBox>
      <Header title="Scroll Animations" />
      <ScrollAnimations />
    </ViewBox>
  )
}
