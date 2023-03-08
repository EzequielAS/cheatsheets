import { CodeViewer } from '../../components/CodeViewer'
import { SummaryTableCode, SummaryTableStyles } from './codeText'

import { SummaryTableContainer } from './styles'

const habits = [...new Array(100)].map((_, index) => index + 1)

export function SummaryTable() {
  return (
    <>
      <SummaryTableContainer>
        {habits.map((habit) => (
          <span key={habit}>{habit}</span>
        ))}
      </SummaryTableContainer>

      <CodeViewer codeTsx={SummaryTableCode} codeTs={SummaryTableStyles} />
    </>
  )
}
