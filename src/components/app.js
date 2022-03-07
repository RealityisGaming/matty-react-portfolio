import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from "axios"

import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN", 
      loggedIn: false
    };
    
    this.handleSuccesfulLogin= this.handleSuccessfulLogin.bind();
    this.handleUnSuccesfulLogin= this.handleUnSuccessfulLogin.bind();
  }

  handleSuccessfulLogin() { 
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }
  
  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "FAILED"
    })
  }

  checkLoginStatus() {
    return axios
    .get("https://api.devcampo.space/logged_in", {withCredentials: true})
    .then(response  => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus

      if(loggedIn && loggedInStatus ==="LOGGED_IN") {
        return loggedIn
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        });
      }
    })
    .catch(error => {
      console.log("Error", error);
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />

            <h2>{this.state.loggedInStatus}</h2>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" render={props =>  (
                <Auth {...props} handleSuccesfulLogin= {this.handleSuccesfulLogin} handleUnSuccesfulLogin={this.handleUnSuccesfulLogin}/>
              )} />
              <Route path="/about-me" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
