import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class landingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://lh3.googleusercontent.com/p4HYuw_7_vBy1RezbDhwbxabmaDkBknuGwKuVjVMXv1biWNwk68bhDSeDdA8rDE3QRIG1hhXIZNYzbZ_mzhyxRLGfLB5OZhRk70dX7dTr71D0CWiOaQST5PQxZRyeRYZBkHnTA2R=w2400"
              alt="me"
              className="me-img"
            />
            <div className="banner-text">
              <h1>Aratrika Ghatak's Resume</h1>
              <h3>
                I am currently a rising sophomore at Cornell University. I am
                double majoring in Computer Science and Electrical and Computer
                Engineering, with a minor in business.{" "}
              </h3>
              <hr />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default landingPage;
