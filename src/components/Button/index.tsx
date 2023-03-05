import { ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to: string
}

export function Button({ to, ...rest }: ButtonProps) {
  return (
    <ButtonContainer>
      <Link to={to}>
        <button {...rest} />
      </Link>
    </ButtonContainer>
  )
}
