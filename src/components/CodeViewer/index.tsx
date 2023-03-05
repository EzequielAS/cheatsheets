import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

import { CodeViewerContainer, TabWindow } from './styles'
import { useState } from 'react'

interface CodeViewerProps {
  codeTsx: string
  codeTs: string
}

export function CodeViewer({ codeTsx, codeTs }: CodeViewerProps) {
  const [activeTab, setActiveTab] = useState<'tsx' | 'ts'>('tsx')

  const isTsxTab = activeTab === 'tsx'
  const currentCode = isTsxTab ? codeTsx : codeTs

  return (
    <CodeViewerContainer>
      <header>
        <TabWindow active={isTsxTab} onClick={() => setActiveTab('tsx')}>
          <FaReact size={16} color="#007acc" />
          <span>index.tsx</span>
        </TabWindow>

        <TabWindow active={!isTsxTab} onClick={() => setActiveTab('ts')}>
          <SiTypescript size={14.5} color="#007acc" />
          <span>styles.ts</span>
        </TabWindow>
      </header>

      <CodeMirror
        readOnly
        value={currentCode}
        extensions={[javascript({ jsx: true })]}
        theme={dracula}
      />
    </CodeViewerContainer>
  )
}
