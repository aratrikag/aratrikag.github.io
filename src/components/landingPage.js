import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class landingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Welcome to FlyHIgh</h1>
              <h3>
            
              </h3>
             

              
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default landingPage;

