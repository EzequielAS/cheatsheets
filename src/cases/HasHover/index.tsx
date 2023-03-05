import { CodeViewer } from '../../components/CodeViewer'
import { HasHoverCode, HasHoverStyles } from './codeText'

import { HasHoverCard, HasHoverContainer } from './styles'

export function HasHover() {
  return (
    <>
      <HasHoverContainer>
        <HasHoverCard>
          <h4>Card 1</h4>
        </HasHoverCard>

        <HasHoverCard>
          <h4>Card 2</h4>
        </HasHoverCard>

        <HasHoverCard>
          <h4>Card 3</h4>
        </HasHoverCard>
      </HasHoverContainer>

      <CodeViewer codeTsx={HasHoverCode} codeTs={HasHoverStyles} />
    </>
  )
}
