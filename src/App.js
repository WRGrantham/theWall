import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Header/Header.js";
import Get from "./Components/Get/Get.js";
import Film from "./Components/Film/Film.js";
import Post from "./Components/Post/Post.js";
import GetUsers from "./Components/Users/GetUsers.js";
import Login from "./Components/Login/Login.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Get} />
          <Route exact path="/film" component={Film} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/users" component={GetUsers} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard/:user_id" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
