import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Aratrika Ghatak</h2>
            <img
              src="https://lh3.googleusercontent.com/p4HYuw_7_vBy1RezbDhwbxabmaDkBknuGwKuVjVMXv1biWNwk68bhDSeDdA8rDE3QRIG1hhXIZNYzbZ_mzhyxRLGfLB5OZhRk70dX7dTr71D0CWiOaQST5PQxZRyeRYZBkHnTA2R=w2400"
              alt="avatar"
              style={{ height: "400px" }}
            />
            <p style={{ width: "75%", margin: "auto" }}>
              Feel free to contact me at any of the following:
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (408) 800-8131
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px" }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    ag988@cornell.edu
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px" }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeID: aratrikag
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
