import { FaArrowLeft } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

import { HeaderContainer } from './styles'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <HeaderContainer>
      {!isHome && (
        <Link to="/">
          <FaArrowLeft />
        </Link>
      )}

      <h1>{title}</h1>
    </HeaderContainer>
  )
}
