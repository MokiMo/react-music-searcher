// Minimalistic monaco editor setup.

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import React from 'react';

class MonacoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.containerElement = undefined;
  }

  componentDidMount() {
    this.initMonaco();
  }

  componentWillUnmount() {
    this.destroyMonaco();
  }

  assignRef = component => {
    this.containerElement = component;
  };

  destroyMonaco() {
    if (typeof this.editor !== 'undefined') {
      this.editor.dispose();
    }
  }

  initMonaco() {
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: true,
      language: 'javascript',
      value: `// minimal microsoft's "monaco editor" (vscode) implementation

// _______________  DEMO CONTENT _______________ 

// Automatically re-try to fetch Data with the fetchRetry helper
const fn = async () =>  {
  const res = await fetchRetry(5);
  console.log(res);
}

/**
 * @async
 * @param {Number} n amount of times the function will retry to make a async call
 */
export const fetchRetry = async n => {
  try {
    // new Promise = fetch
    return await new Promise((resolve, reject) => {
      if (n > 0) {
        window.setTimeout(() => {
          reject();
          console.log("try: " + n);
        }, Math.random() * 2000);
      } else {
        window.setTimeout(() => {
          resolve('resolved');
        }, Math.random() * 2000);
      }
    });
  } catch (err) {
    return fetchRetry(n - 1);
  }
};

// _______________  DEMO CONTENT _______________ `,
    };

    if (this.containerElement) {
      // Before initializing monaco editor
      Object.assign(options);
      this.editor = monaco.editor.create(this.containerElement, {
        ...options,
      });
      monaco.editor.setTheme('vs-light');

      // After initializing monaco editor
      this.editorDidMount(this.editor);
    }
  }

  editorDidMount() {
    console.log('mounted');
  }

  render() {
    const style = {
      height: '91.3vh',
    };

    return (
      <div
        ref={this.assignRef}
        style={style}
        className="react-monaco-editor-container"
      />
    );
  }
}

export default MonacoEditor;
