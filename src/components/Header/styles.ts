import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.5rem 1rem;
  color: white;
  position: relative;

  display: flex;
  justify-content: center;

  a {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  svg {
    color: white;
    font-size: 1.7rem;
  }
`
