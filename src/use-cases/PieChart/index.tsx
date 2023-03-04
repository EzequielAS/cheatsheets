// viewBox => (x, y, height + border width, width + border width)
// circle => cx e cy posicionamento do ponto do meio do círculo | stroke é a cor da borda | r é o raio
// defs são as definições do linear gradiente usada no circle
// stroke-dasharray e stroke-dashoffset => cálculo é feito com o diâmetro * 

import { 
  PercentText, 
  PieChartContainer, 
  PieChartContent, 
} from "./styles"

export function PieChart() {
  return (
    <PieChartContainer>
      <PieChartContent viewBox="0 0 232 232" percentage={70}>
        <circle 
          cx="50%" 
          cy="50%" 
          r="98.5" 
          opacity="0.1" 
          stroke="#D9D9D9" 
        />

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