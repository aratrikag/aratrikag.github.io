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
          <Header className="header-color" title="Aratrika Ghatak" scroll>
            <Navigation className="Navi">
              <Link className="welcomeLink" to="/landingPage">
                Welcome
              </Link>
              <Link className="welcomeLink1" to="/Accomplishments">
                Experience and Skills
              </Link>
              <Link className="welcomeLink2" to="/AwardsAndProjects">
                Projects/Awards
              </Link>
              <Link className="welcomeLink3" to="/Education">
                Education
              </Link>
              <Link className="welcomeLink4" to="/contact">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link className="welcomeLink" to="/landingPage">
                Welcome
              </Link>
              <Link className="welcomeLink1" to="/Accomplishments">
                Experience and Skills
              </Link>
              <Link className="welcomeLink2" to="/AwardsAndProjects">
                Projects/Awards
              </Link>
              <Link className="welcomeLink3" to="/Education">
                Education
              </Link>
              <Link className="welcomeLink4" to="/contact">
                Contact
              </Link>
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

