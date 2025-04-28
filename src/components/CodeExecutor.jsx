"use client";

import { useState, useEffect } from "react";
import AceEditor from "react-ace";

// Import the required ace modules
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeExecutor({ code }) {
  const [output, setOutput] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [editorCode, setEditorCode] = useState(code);

  // Update editor content when code prop changes
  useEffect(() => {
    setEditorCode(code);
    setOutput([]);
  }, [code]);

  const executeCode = () => {
    setIsExecuting(true);
    setOutput([]);

    // Capture console.log output
    const originalConsoleLog = console.log;
    const logs = [];

    console.log = (...args) => {
      const formattedArgs = args.map((arg) => {
        if (typeof arg === "object") {
          return JSON.stringify(arg);
        }
        return String(arg);
      });
      logs.push(formattedArgs.join(" "));
    };

    try {
      // Execute the edited code
      const result = new Function(editorCode)();

      // If there's a return value, add it to the output
      if (result !== undefined) {
        logs.push(`Return value: ${result}`);
      }

      setOutput(logs);
    } catch (error) {
      setOutput([`Error: ${error.message}`]);
    } finally {
      // Restore original console.log
      console.log = originalConsoleLog;
      setIsExecuting(false);
    }
  };

  return (
    <div className="code-executor">
      <AceEditor
        mode="javascript"
        theme="github"
        value={editorCode}
        onChange={setEditorCode}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="370px"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />

      <button
        onClick={executeCode}
        disabled={isExecuting}
        className="execute-button"
      >
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
  );
}

export default CodeExecutor;
