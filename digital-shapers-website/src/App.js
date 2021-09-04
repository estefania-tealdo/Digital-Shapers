import React from 'react';
import HomePage from "./HomePage.js";
import Header from "./Header";
import Footer from "./Footer";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/NavigationBar';
import { Link, animateScroll as scroll } from "react-scroll";

export default class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          title: "Digital Shapers",
          routes: [
              {
                  render: (props) => {
                      return (<HomePage {...props} title={"Digital Shapers Website"} />)
                  }, path: '/', exact: true
              }
           ]
      };
  }

  componentDidMount() {
      document.title = this.state.title;
  }

  render() {
      return (
          <div>
              <Router>
                  <div>
                        <Header />
                        <React.Fragment>
                                <NavigationBar />
                        </React.Fragment>
                      <Switch>
                          {this.state.routes.map((route, i) => (<Route key={i} {...route} />))}
                      </Switch>
                      <Footer/>
                  </div>
              </Router>
          </div>

      );
    }
  }
