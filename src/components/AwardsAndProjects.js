import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
import Skills from "./Skills";
class AwardsAndProjects extends Component {
  render() {
    return (
      <div class="container">
      <div style={{textAlign: "center"}}>
        <h2>Contact Us</h2>
        <p>Leave any feedback!</p>
      </div>
      <div class="row">
       
        <div class="column" style = {{justifyContent: "center"}}>
          <form action="/action_page.php">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </div>
    );
  }
}
export default AwardsAndProjects;
