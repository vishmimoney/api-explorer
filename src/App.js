import React, { Component } from 'react';
import Header from './components/Common/Header.js';
import ListView from './components/ListView';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <ListView></ListView>
      </div>
    );
  }
}

export default App;
