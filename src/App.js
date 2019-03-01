import React, { Component } from 'react';
import Header from './components/header';
import BlogsList from './components/blogs/BlogsList';
import EntriesList from './components/entries/EntriesList';
import AuthorsList from './components/authors/AuthorsList';
import CommentsList from './components/comments/CommentsList';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header></Header>
          <Route path="/" exact component={BlogsList}></Route>
          <Route path="/entries" component={EntriesList}></Route>
          <Route path="/authors" component={AuthorsList}></Route>
          <Route path="/comments" component={CommentsList}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
