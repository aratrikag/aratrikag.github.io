import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
import Skills from "./Skills";
class Accomplishments extends Component {
  render() {
    return (
      <Grid className="accomB">
        <div className="accomB">
          <div className="gwc" col={8}>
            <h4>
              <b>Girls Who Code Ambassador</b>: 2016-2018
            </h4>
            <p>
              I helped students learn how to make websites, application and code
              in various languages such as Python and Java. In addition, I
              assisted instuctors in lesson planning and teaching.
            </p>
          </div>

          <div className="gwc1" col={8}>
            <h4>
              {" "}
              <b>Tutor at Silver Creek Academy</b>: 2016-2018
            </h4>
            <p>
              I assisted the teachers in managing classes and students, and
              helped teach subjects such as math, english, and public speaking.
            </p>
          </div>
          <div col={4} />

          <div className="gwc" col={8}>
            <h4>
              <b>Instructor at ‘An Appetite for Apps’</b>: 2016-2018
            </h4>
            <p>
              I cofounded a program that taught children in elementary and
              middle schools how to create applications using MIT app inverntor
              2. I gave weekly lessons on mobile application creation, allowing
              the kids to test and develop their apps.
            </p>
          </div>
          <div className="gwc1">
            <p>
              <h4>
                <b>Skills Include:</b>
              </h4>
              <ul>
                <h4>
                  <li>Python(Proficient)</li>
                  <li>Java(Proficient)</li>
                  <li>Swift(Beginner)</li>
                  <li>JS/HTML/CSS(Beginner)</li>
                </h4>
              </ul>
            </p>
          </div>
          <div col={10}>
            <img
              src="https://anappetiteforapps.files.wordpress.com/2016/05/img_0270.jpg?w=1556"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <img
              src="https://files.constantcontact.com/711f5ea9001/6bed921c-1136-4658-829f-6e0793708353.jpg?a=1126186292633"
              alt="avatar"
              style={{ height: "250px" }}
            />
          </div>
        </div>
      </Grid>
    );
  }
}
export default Accomplishments;
