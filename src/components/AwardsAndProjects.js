import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
import Skills from "./Skills";
class AwardsAndProjects extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={8}>
            <h2 style={{ marginTop: "0px", color: "white" }}>
              <div className="Project1">Projects</div>
            </h2>

            <h4 style={{ marginTop: "0px", color: "black" }}>
              <b>CS 2110(Object oriented programming)</b>
            </h4>

            <p>
              <ul>
                <li>
                  I completed various projects using JAVA, implementing heaps,
                  binary trees, linked lists, and graphs.
                </li>
              </ul>
            </p>
            <h4 style={{ marginTop: "0px" }}>
              <b>
                Machine Learning to Predict Safety Rates of College Campuses
              </b>
            </h4>
            <p>
              <ul>
                <li>
                  In this project, I developed a safety grading system of US
                  college campuses. I used college campus crime statistics from
                  US Dept. of Education, and collected related attributes from
                  various governmental websites such as FBI, Dept. of Labor, US
                  Census Bureau etc. Then I ran various Machine Learning
                  algorithms using the platform ‘Weka’ on the training dataset
                  of approximately 1.5M data points to find out the best
                  predictive model.
                </li>
              </ul>
            </p>
            <h4 style={{ marginTop: "0px" }}>
              <b>Traffic Signal Preemption for Emergency Vehicles</b>
            </h4>
            <p>
              <ul>
                <li>
                  I prototyped a low cost traffic preemption solution for
                  emergency vehicles using mobile applications. I developed the
                  applications on MIT App-Inventor 2 for Android utilizing
                  Google drive and Fusion table APIs.
                </li>
              </ul>
            </p>
          </Cell>
          <Cell col={4}>
            <iframe
              width="350"
              height="500"
              src="https://www.youtube.com/embed/qbNUGLXbZsc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Cell>
          <Cell col={8} />
          <Cell col={8} />

          <Cell col={8}>
            <h2 style={{ marginTop: "0px", color: "white" }}>
              <div className="Project1">Awards</div>
            </h2>

            <h4 style={{ marginTop: "0px", color: "black" }}>
              <b>Intel International Science and Engineering Fair finalist</b>
            </h4>

            <p>
              <ul>
                <li>
                  I organized and led a team to semi finals in a mobile
                  application competition, where we marketed and pitched an
                  application that displayed statistics on college crime rates.
                </li>
              </ul>
            </p>
            <h4 style={{ marginTop: "0px" }}>
              <b>Technovation 2017</b>
            </h4>
            <p>
              <ul>
                <li>
                  I organized and led a team to semi finals in a mobile
                  application competition, where we marketed and pitched an
                  application that displayed statistics on college crime rates.
                </li>
              </ul>
            </p>
            <h4 style={{ marginTop: "0px" }}>
              <b>San Jose Mayoral Award for Community Service</b>
            </h4>
            <p>
              <ul>
                <li>
                  I received an award from the mayor of San Jose for teaching
                  kids in local underprivileged areas how to create mobile
                </li>
              </ul>
            </p>
            <img
              src="https://lh3.googleusercontent.com/1ROHHgR3DM8yql7ZBaTvZ3co-H2bQNYmWr9ebFJCbtq7nfPp9KYQhiNK0p5cmT3T3rozxc5gToF34n00JLjd9nfR621iY3jnNRU1WJW_KEWI-FUqffKu7mNaJ_YWBYXKTeYroIhe-8tsMaMqKyS_b47mGsHj9-5c0xlyIvT_kqlaof0KAwwfwau8ZN1pKRHeagZRzAXIgRLUzPXu6xV2ZFS0Olc67-RvH3WqN2Tl13KE7Ysky8wHaLRgxHfFknnahWKxnBCh6UfoJpAAG_VEO88UOLmiPzHKYVjPrKpehkx--AcSJLbGLvD3TFhrm__nIe_-zwIcSzLlc8J5E_D7OJYp_TlL2t7GnRmbrkZvw0u5SmPNw36ksVuf49RTSLhxPdJvX0hDQsjpjmP_xL6vAnFkLpLQw9T6GTxziWTDqhp496Su-xoYvK3dguz2-rO6i0ZlvffErUMpmmtcwV2z70gKeKh-24977AI5otfLQRMl7bSYQ-6B0FmxV0YYoQKOamYOaRw8KiJqeBgS-A1VPcggGx-J77NRo5g1md95vTXaZ0bo9cekZkLcZBTHIAooNLgTPtWzHIL6pJDV8AVCjre4xLTyIX7EMOjrgje9gN9VdPUE9FjMFSyDtqxxyfI_PfirzWMwSpgnOLj9qoyvmpeJ42dpnN4uKxV7fq9EfKL4P3bUy8mZYrQ7ljr5LnSPfqosUAsggPRR7WNSLP4SEeM=w822-h546-no"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <h6> Intel ISEF Finalists</h6>
          </Cell>
          <Cell col={4}>
            <img
              src="https://lh3.googleusercontent.com/MPBYcpRSMVE6gCrU_W6Z43HJHM8Ct6CPHSW1Te4ILcm_D9HwuCJfQ2x-mnYpK3XizCkPHK-6Iv64-AE6Ok-uV42facCMVlJgkYLOCxQyZecom_QS3aVoTWmEe9wA1QZ_LryI68az=w2400"
              alt="My Technovation Group Members"
              style={{ height: "250px" }}
            />
            <h6> My Science Fair Awards </h6>

            <img
              src="https://cdn.schoolloop.com/uimgcdn/aHR0cDovL2V2aHMuc2Nob29sbG9vcC5jb20vdWltZy9maWxlLzEyODE3NjMzNzU0NDcvNzk3OTAxODc1MjU0MjQ1MjE2My5qcGdfd25wMTAwMC5qcGc/MTUxODQ0NTkxNTM4OQ=="
              alt="avatar"
              style={{ height: "250px" }}
            />
            <h6> Technovation Panel at IBM </h6>
          </Cell>

          <Cell col={8} />
        </Grid>
      </div>
    );
  }
}
export default AwardsAndProjects;
