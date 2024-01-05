import { CodeViewer } from '../../components/CodeViewer'

import { HeroBanner, ScrollAnimationsContainer } from './styles'

export function ScrollAnimations() {
  return (
    <>
      <ScrollAnimationsContainer>
        <HeroBanner>
          <h1>Scroll Animations 🚀</h1>

          <img src="/eiffel.jpg" alt="" />
        </HeroBanner>
      </ScrollAnimationsContainer>

      <CodeViewer
        codeTsx="console.log('teste')"
        codeTs="console.log('teste')"
      />
    </>
  )
}
