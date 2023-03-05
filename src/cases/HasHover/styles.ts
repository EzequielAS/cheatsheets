import styled from 'styled-components'

export const HasHoverContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  &:has(div:hover) div:not(:hover) {
    opacity: 0.6;
    scale: 0.9;
  }
`

export const HasHoverCard = styled.div`
  color: white;
  font-size: 1rem;
  background: #363447;
  box-shadow: 1.5px 2px 13px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 1rem 2rem;
  transition: 0.2s ease-out;
  cursor: pointer;
`
