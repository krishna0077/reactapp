import React, { Component } from "react";
import ARUN from "../styles/ece-arun.jpg";
class About extends Component {
  state = {};
  render() {
    return (
      <div class="col-md-9 col-sm-9">
        <div class="forum-wrapper section-header03">
          <h2>
            About <span>Research & Consultancy Cell</span>
          </h2>{" "}
          <hr className="line" style={{ borderColor: "gray" }} />
          <div class="forum-content about-ds-content">
            <p>
              R.M.K. College of Engineering and Technology has been emphasizing
              on Research and Consultancy (R&C) in various areas of Engineering
              through
            </p>
            <ul class="list-unstyled">
              <li>
                {" "}
                <i className="fa fa-check" aria-hidden="true" />
                &nbsp; Research projects funded by the external agencies like
                ISRO etc
              </li>
              <li>
                {" "}
                <i className="fa fa-check" aria-hidden="true" />
                &nbsp; Organizing International and National Conferences,
                Seminars and Workshops funded by the college and external
                agencies like AICTE, IET, ISTE etc
              </li>
              <li>
                {" "}
                <i className="fa fa-check" aria-hidden="true" />
                &nbsp; Encouraging Faculty Members and Students to apply for
                Patents
              </li>
              <li>
                {" "}
                <i className="fa fa-check" aria-hidden="true" />
                &nbsp; Encouraging Faculty Members to pursue PhD
              </li>
            </ul>
            <div class="divider">&nbsp;</div>
            <h4>Research Cell Coordinator</h4>{" "}
            <hr className="line" style={{ borderColor: "gray" }} />
            <div class="col-sm-3">
              <img class="imgborder wid100" src={ARUN} />
            </div>
            <div class="col-sm-9">
              <h4>Dr. ARUN C</h4>
              <p>
                <strong>Professor</strong>
              </p>
              <p>
                Department of Electronics & Communications <br /> R.M.K. College
                of Engineering and Technology
                <br />
                R.S.M. Nagar, Puduvoyal, Gummidipoondi Taluk,
                <br />
                Tiruvallur District, Tamil Nadu,
                <br />
                India. Pin code: 601 206.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
