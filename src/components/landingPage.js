import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class landingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Hi. My name is Aratrika Ghatak</h1>
              <h3>
                I am currently a rising sophomore at Cornell University. I am
                double majoring in Computer Science and Electrical and Computer
                Engineering, with a minor in business.{" "}
              </h3>
              <hr />

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/aratrika-ghatak-388809155"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/aratrikag/aratrikag.github.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="https://www.youtube.com/playlist?list=UUzGk8mLb9sFQuJiDNyXdUcA"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default landingPage;


