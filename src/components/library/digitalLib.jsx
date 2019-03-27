import React from "react";
const DigitalLibrary = () => {
  return (
    <div className="container" style={{ fontFamily: "Crete Round" }}>
      <div className="row">
        <div className="col-md-7 col-sm-6 about-ds-content">
          <div className="section-header03">
            <h2>
              <br />
              ELECTRONIC <span>RESOURCES</span>
              <strong>
                {" "}
                <hr className="line" />
              </strong>
            </h2>
          </div>
          <br />
          <ol>
            <li>
              <a
                href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                target="_blank"
              >
                IEEE Xplore Digital Library
              </a>
            </li>{" "}
            <hr className="line" />
            <li>
              <a href="http://asmedigitalcollection.asme.org" target="_blank">
                ASME{" "}
              </a>
            </li>{" "}
            <hr className="line" />
            <li>
              <a href="http://164.100.247.30/" target="_blank">
                DELNET Digital
              </a>
            </li>{" "}
            <hr className="line" />
            <li>
              <a
                href="https://www.ieindia.org/AdminUI/IEI-Dashboard.aspx"
                target="_blank"
              >
                IEI (The Institution of Engineers India)
              </a>
            </li>{" "}
            <hr className="line" />
            <li>
              <a
                href="http://10.0.11.43:8080/Bootstrap/main.html"
                target="_blank"
              >
                NPTEL
              </a>
            </li>{" "}
            <hr className="line" />
            <li>
              <a href="https://ndl.iitkgp.ac.in/ " target="_blank">
                NDL (National Digital Library of India)
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DigitalLibrary;
