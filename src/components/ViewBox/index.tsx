import { ReactNode } from 'react'

import { ViewContainer } from './styles'

interface ViewBoxProps {
  children: ReactNode
}

export function ViewBox({ children }: ViewBoxProps) {
  return <ViewContainer>{children}</ViewContainer>
}
