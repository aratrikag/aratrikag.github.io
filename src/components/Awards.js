import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Awards extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "600", margin: "auto" }}>
            <CardTitle>CS 2110(Object oriented programming)</CardTitle>
            <CardText>
              I completed various projects using JAVA, implementing heaps,
              binary trees, linked lists, and graphs.
            </CardText>
            <CardActions border />
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle>
              Machine Learning to Predict Safety Rates of College Campuses
            </CardTitle>
            <CardText>
              ​In this project, I developed a safety grading system of US
              college campuses. I used college campus crime statistics from US
              Dept. of Education, and collected related attributes from various
              governmental websites such as FBI, Dept. of Labor, US Census
              Bureau etc. Then I ran various Machine Learning algorithms using
              the platform ‘Weka’ on the training dataset of approximately 1.5M
              data points to find out the best predictive model.
            </CardText>
            <CardActions border>
              <a href="https://www.youtube.com/watch?v=lVK20ryqmJA">
                <button>Live Demo</button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle>
              Traffic Signal Preemption for Emergency Vehicles
            </CardTitle>
            <CardText>
              I prototyped a low cost traffic preemption solution for emergency
              vehicles using mobile applications. I developed the applications
              on MIT App-Inventor 2 for Android utilizing Google drive and
              Fusion table APIs.
            </CardText>
            <CardActions border>
              <a href="https://www.youtube.com/watch?v=qbNUGLXbZsc">
                <button>Live Demo</button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="awards-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "600", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "350px",
                background:
                  "url(https://lh3.googleusercontent.com/-h81qApom7v5W5VuNFj7ZcLiIqB6AjhAVimKC_2PB807PkJypCVpUU6A-xslcSDRq1e5fWAYYIukH2p0h-StLF69xmEqHLcnP-nzuCJHapbh2-MRjRhGo0B5Idj3rLgWoJYZVCVd=w2400) center / cover"
              }}
            />
            <CardTitle>Intel ISEF</CardTitle>
            <CardText>
              I was an Intel ISEF finalist for my project that predicted safety
              rates for different colleges using machine learning.
            </CardText>
            <CardActions border />
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle>Technovation Semifinalist</CardTitle>
            <CardText>
              ​ I organized and led a team to semifinals in a mobile application
              competition, where we marketed and pitched an application that
              displayed statistics on college crime rates.
            </CardText>
            <CardActions border>
              <a href="https://www.youtube.com/watch?v=lVK20ryqmJA">
                <button>Live Demo</button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Projects</Tab>
          <Tab>Awards</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Awards;
