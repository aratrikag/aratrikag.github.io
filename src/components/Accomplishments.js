import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
import Skills from "./Skills";
class Accomplishments extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <p>2015 - 2018</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{ marginTop: "0px" }}>Girls Who Code Ambassador</h4>
            <p>
              <ul>
                <li>
                  I helped students learn how to make websites, application and
                  code in various languages such as Python and Java.
                </li>
                <li>I assisted instructors in lesson planning and teaching</li>
              </ul>
            </p>
          </Cell>
          <Cell col={4}>
            <p>2016 - 2018</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{ marginTop: "0px" }}>Tutor at Silver Creek Academy</h4>
            <p>
              <ul>
                <li>
                  I tutored and assistd children ages 7-14 in several subjects
                  including math, english, and public speaking
                </li>
              </ul>
            </p>
          </Cell>
          <Cell col={4}>
            <p>2015 - 2018</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{ marginTop: "0px" }}>
              Instructor at ‘An Appetite for Apps’
            </h4>
            <p>
              <ul>
                <li>
                  I cofounded a program that taught children in elementary and
                  middle schools how to create applications using MIT app
                  inverntor 2.
                </li>
                <li>
                  I gave weekly lessons on mobile application creation, allowing
                  the kids to test and develop their apps.
                </li>
              </ul>
            </p>
          </Cell>
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Skills</h2>
          <Cell col={12}>
            <div style={{ display: "flex" }}>
              <h4>Java: Proficient</h4>
              <ProgressBar
                style={{ margin: "auto", width: "75%" }}
                progress={74}
              />{" "}
            </div>
          </Cell>
          <Cell col={12}>
            <div style={{ display: "flex" }}>
              <h4>Python: Proficient</h4>
              <ProgressBar
                style={{ margin: "auto", width: "75%" }}
                progress={70}
              />{" "}
            </div>
          </Cell>
          <Cell col={12}>
            <div style={{ display: "flex" }}>
              <h4>Swift: Beginner</h4>
              <ProgressBar
                style={{ margin: "auto", width: "75%" }}
                progress={20}
              />{" "}
            </div>
          </Cell>
          <Cell col={12}>
            <div style={{ display: "flex" }}>
              <h4>JS/HTML/CSS: Beginner</h4>
              <ProgressBar
                style={{ margin: "auto", width: "75%" }}
                progress={20}
              />{" "}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Accomplishments;
