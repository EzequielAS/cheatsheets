export const SummaryTableCode = `
import { CodeViewer } from '../../components/CodeViewer'

import { SummaryTableContainer } from './styles'

const habits = [...new Array(100)].map((_, index) => index + 1)

export function SummaryTable() {
  return (
    <SummaryTableContainer>
      {habits.map((habit) => (
        <span key={habit}>{habit}</span>
      ))}
    </SummaryTableContainer>
  )
}
`

export const SummaryTableStyles = `
import styled from 'styled-components'

export const SummaryTableContainer = styled.div'
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-auto-flow: column;
  gap: 3px;
  width: 100%;
  max-width: 550px;
  overflow-x: auto;

  span {
    height: 2rem;
    width: 2rem;
    font-size: 0.9rem;
    background: #484563;
    box-shadow: 1.5px 2px 13px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
'
`
