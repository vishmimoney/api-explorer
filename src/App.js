import React, { Component } from 'react';
import Header from './components/header';
import BlogsList from './components/blogs/BlogsList';
import EntriesList from './components/entries/EntriesList';
import AuthorsList from './components/authors/AuthorsList';
import CommentsList from './components/comments/CommentsList';
import BlogsDetails from './components/blogs/BlogsDetails';
import EntriesDetails from './components/entries/EntriesDetails';
import AuthorsDetails from './components/authors/AuthorsDetails';
import CommentsDetails from './components/comments/CommentsDetails';
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
          <Route path="/entries" exact component={EntriesList}></Route>
          <Route path="/authors" exact component={AuthorsList}></Route>
          <Route path="/comments" exact component={CommentsList}></Route>
          <Route path="/blogs/:id" component={BlogsDetails}></Route>
          <Route path="/entries/:id" component={EntriesDetails}></Route>
          <Route path="/authors/:id" component={AuthorsDetails}></Route>
          <Route path="/comments/:id" component={CommentsDetails}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
