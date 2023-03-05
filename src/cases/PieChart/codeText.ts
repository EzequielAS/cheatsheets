export const PieChartCode = ` 
// viewBox => (x, y, height + border width, width + border width)
// circle => cx e cy posicionamento do ponto do meio do círculo | stroke é a cor da borda | r é o raio
// defs são as definições do linear gradiente usada no circle
// stroke-dasharray e stroke-dashoffset => cálculo é feito com o diâmetro * 

import { PercentText, PieChartContainer, PieChartContent } from './styles'

export function PieChart() {
  return (
    <PieChartContainer>
      <PieChartContent viewBox="0 0 232 232" percentage={70}>
        <circle cx="50%" cy="50%" r="98.5" opacity="0.1" stroke="#D9D9D9" />

        <circle
          cx="50%"
          cy="50%"
          r="98.5"
          stroke="url(#paint0_linear_201_85)"
        />

        <defs>
          <linearGradient
            id="paint0_linear_201_85"
            x1="-9"
            y1="82"
            x2="145"
            y2="178"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CE9FFC" />
            <stop offset="1" stopColor="#7367F0" />
          </linearGradient>
        </defs>
      </PieChartContent>

      <PercentText>
        <h3>70%</h3>
        <p>alcançada</p>
      </PercentText>
    </PieChartContainer>
  )
}
`

export const PieChartStyles = `
import styled from 'styled-components'

interface PieChartContentProps {
  percentage: number;
}

export const PieChartContainer = styled.div'
  position: relative;
  width: 12rem;
  height: 12rem;
'

export const PieChartContent = styled.svg<PieChartContentProps>'
  transform: rotate(-90deg);

  circle {
    stroke-dasharray: 618px;
    stroke-dashoffset: 618px;
    stroke-width: 35px;
    fill: none;

    &:nth-child(1) {
      stroke-dashoffset: 0;
    }

    &:nth-child(2) {
      stroke-dashoffset: {props => calc(618px - (618px * props.percentage) / 100)}; 
      stroke-linecap: round;

      animation: progress 1s ease-in-out;
    }
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 618;
      stroke-dashoffset: 618;
    }
  }
'

export const PercentText = styled.div'
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h3 {
    font-size: 2rem;
  }
'
`
