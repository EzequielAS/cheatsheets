import styled from 'styled-components'

interface TabWindowProps {
  active: boolean
}

export const CodeViewerContainer = styled.div`
  width: 98%;

  header {
    background: #282a36;
    width: 100%;
    padding: 0.9rem;
    padding-left: 20px;

    display: flex;
  }

  .cm-content {
    -webkit-user-modify: read-only !important;
  }

  .cm-theme {
    font-size: 0.9rem;
  }

  .cm-line {
    padding: 0 10px;
    padding-right: 0;
  }

  .cm-activeLine,
  .cm-activeLineGutter {
    background: transparent;
  }
`

export const TabWindow = styled.button<TabWindowProps>`
  border: none;
  background: ${(props) => (props.active ? '#817c9c26' : '#817c9c14')};
  color: white;
  display: flex;
  align-items: center;
  padding: 0.7rem;
  gap: 0.5rem;
  transition: 0.2s ease;
  min-width: 100px;

  :hover {
    background: #817c9c26;
  }
`
