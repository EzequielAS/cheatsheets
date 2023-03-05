import styled from 'styled-components'

interface PieChartContentProps {
  percentage: number
}

export const PieChartContainer = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
`

export const PieChartContent = styled.svg<PieChartContentProps>`
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
      stroke-dashoffset: ${(props) =>
        `calc(618px - (618px * ${props.percentage}) / 100)`};
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
`

export const PercentText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h3 {
    font-size: 2rem;
  }
`
