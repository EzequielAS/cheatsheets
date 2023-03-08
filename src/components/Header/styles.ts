import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.5rem 2rem;
  color: white;
  position: relative;
  text-align: center;

  display: flex;
  justify-content: center;

  a {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    color: white;
    font-size: 1.7rem;
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 1.5rem;
    }

    svg {
      font-size: 1.3rem;
    }
  }
`
