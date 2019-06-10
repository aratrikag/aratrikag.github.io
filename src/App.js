//import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Aratrika" scroll>
            <Navigation>
              <Link to="/landingPage">Welcome</Link>
              <Link to="/Accomplishments">Experience and Skills</Link>
              <Link to="/Awards">Projects/Awards</Link>
              <Link to="/Education">Education</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/landingPage">Welcome</Link>
              <Link to="/Accomplishments">Experience and Skills</Link>
              <Link to="/Awards">Projects/Awards</Link>
              <Link to="/Education">Education</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
