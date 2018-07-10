import React, { Component } from "react";
import AppRouter from "./router/AppRouter";
class App extends Component {

  render() {
  	const spinner = document.getElementById('spinner');

if (spinner && !spinner.hasAttribute('hidden')) {
  spinner.setAttribute('hidden', 'true');
}
    return (
        <AppRouter/>
    );
  }
}

export default App;


