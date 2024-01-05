import styled from 'styled-components'

export const ScrollAnimationsContainer = styled.div`
  width: 100%;
  height: 200vh;
`

export const HeroBanner = styled.div`
  height: calc(100vh - 120px);
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0.5;
    inset: 0;
    z-index: -1;

    animation: hero-banner-animated linear forwards;
    animation-timeline: view();
    animation-range: exit;
  }

  @keyframes hero-banner-animated {
    25% {
      opacity: 1;
    }

    85%,
    100% {
      opacity: 0;
      scale: 3;
    }
  }
`
