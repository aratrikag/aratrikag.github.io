import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
import Skills from "./Skills";
class Accomplishments extends Component {
  render() {
    return (
      <div className="accomB">
        <header class="bg-primary text-center py-5 mb-4">
  <div class="container">
    <h1 class="font-weight-light text-white">Meet the Team</h1>
  </div>
</header>
<div class="container">
  <div class="row">
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow" style = {{flexDirection:"row"}}>
        <div>

        <img src="https://media.licdn.com/dms/image/C4E03AQFrTFvxvSC-NQ/profile-displayphoto-shrink_800_800/0?e=1579132800&v=beta&t=sdi8q897PVzNZ62g4E4OhZm0eA403nAyOq1e65GmRfA" height="400" class="card-img-top" alt="..."/>
        </div>
        <div class="card">
          <h5 class="card-title mb-0" >Erika Echaniz</h5>
          <div class="card-text text-black-50">CEO/Co-founder: Erika Echaniz is a junior at Cornell University studying Industrial and Labor Relations with a minor in Entrepreneurship</div>
        </div>
      </div>
      </div >
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://media.licdn.com/dms/image/C4E03AQHYfsTuj08qlA/profile-displayphoto-shrink_800_800/0?e=1579132800&v=beta&t=4CfVkGfOzw_JYokXoXbDcadVEANPrrfDJZJ4fsH0ICQ" height = "400" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Nikhil Gotgi</h5>
          <div class="card-text text-black-50">CEO/Co-founder: Nikhil Gotgi is a sophomore at The University of Texas at Dallas studying Economics and Finance</div>
        </div>
      </div>
    </div>
      <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://media.licdn.com/dms/image/C4E03AQG4vgwCGXpmhg/profile-displayphoto-shrink_800_800/0?e=1579132800&v=beta&t=t_X6AeJ558ZoCXIELILaGWzmtJ--Bxp7D-yP2PEbl1g" height = "400" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Eliot Shekhtman</h5>
          <div class="card-text text-black-50">Backend Developer: Eliot Shekhtman is a sophomore at Cornell University studying Computer Science in the College of Engineering.</div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
        <img src="https://media.licdn.com/dms/image/C5603AQFy_N_QtX0qcg/profile-displayphoto-shrink_200_200/0?e=1579132800&v=beta&t=39deFNeKXSYrd6ifFCjZ5GVUgxkM3uEmMZy1_w1KJjM" height = "400" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Aratrika Ghatak</h5>
          <div class="card-text text-black-50">Web Developer: Aratrika Ghatak is a sophomore ay Cornell University studying Electrical and Computer Engineering in the College of Engineering.</div>
        </div>
      </div>
    </div>
  </div>

      </div>
    </div>
    
  
      
     
    );
  }
}
export default Accomplishments;

