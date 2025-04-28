"use client"

import { useState } from "react"

function CodeExecutor({ code }) {
  const [output, setOutput] = useState([])
  const [isExecuting, setIsExecuting] = useState(false)

  const executeCode = () => {
    setIsExecuting(true)
    setOutput([])

    // Capture console.log output
    const originalConsoleLog = console.log
    const logs = []

    console.log = (...args) => {
      const formattedArgs = args.map((arg) => {
        if (typeof arg === "object") {
          return JSON.stringify(arg)
        }
        return String(arg)
      })
      logs.push(formattedArgs.join(" "))
    }

    try {
      // Execute the code
      const result = new Function(code)()

      // If there's a return value, add it to the output
      if (result !== undefined) {
        logs.push(`Return value: ${result}`)
      }

      setOutput(logs)
    } catch (error) {
      setOutput([`Error: ${error.message}`])
    } finally {
      // Restore original console.log
      console.log = originalConsoleLog
      setIsExecuting(false)
    }
  }

  return (
    <div className="code-executor">
      <pre className="code-block">
        <code>{code}</code>
      </pre>

      <button onClick={executeCode} disabled={isExecuting} className="execute-button">
        🚀 Exécuter le code
      </button>

      {output.length > 0 && (
        <div className="output">
          <div className="output-header">✨ Console:</div>
          {output.map((line, index) => (
            <div key={index} className="output-line">
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CodeExecutor
