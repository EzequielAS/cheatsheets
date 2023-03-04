import { ViewBox } from "./use-cases/components/ViewBox";
import { PieChart } from "./use-cases/PieChart";

import { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

export function App() {
  const [code, setCode] = useState('console.log("teste")')

  return (
    <ViewBox>
      <PieChart />

      <CodeEditor
        value={code}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 16,
        }}
      />
    </ViewBox>
  )
}
