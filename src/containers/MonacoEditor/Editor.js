// Minimalistic monaco editor setup.

// A very nice lib
// that inspired me: https://github.com/react-monaco-editor/react-monaco-editor

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import React from 'react';
import value from './initialCodeValue';

class MonacoEditor extends React.Component {
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
      value,
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
    return <div ref={this.assignRef} style={{ height: '91.3vh' }} />;
  }
}

export default MonacoEditor;
