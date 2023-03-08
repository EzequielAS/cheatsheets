import { HasHover } from '../cases/HasHover'
import { Header } from '../components/Header'
import { ViewBox } from '../components/ViewBox'

export function HasHoverPage() {
  return (
    <ViewBox>
      <Header title=":has:hover Animated" />
      <HasHover />
    </ViewBox>
  )
}
