import React, { Component } from "react";
import "./styles/common.css";
//import canteen from "./styles/rmkcanteen.jpg";

class MainPageBody extends Component {
  render() {
    return (
      <React.Fragment>
        <br />

        <div className="container" style={{ fontFamily: "Crete Round" }}>
          <div className="row">
              <br />
	        	<div className="col-sm-3">
	        		<ul className="highlightLnk">
	        			<li className="btn btn-primary"><a href="career-guidance.php">Career Guidance Cell<span>&nbsp;</span></a></li>
						<li className="btn btn-warning"><a href="higher-education-cell.php">Higher Education Cell<span>&nbsp;</span></a></li>
						<li className="btn btn-success"><a href="sports.php">Sports<span>&nbsp;</span></a></li>
	        			<li className="btn btn-dark"><a href="new_cse/COE/index.html">RMK App Store<span>&nbsp;</span></a></li>
	        			
	        		</ul>
	        		<ul className="hignbox">
	        			<li className="orange odd"><a href="bus/busroutes.pdf" target="_blank">Transport<span>&nbsp;</span></a></li>
	        			<li className="blue even"><a href="cse-department-lab360.php">Gallery<span>&nbsp;</span></a></li>
	        			<li className="green odd"><a href="press-news.php">Press Clips<span>&nbsp;</span></a></li>
	        			<li className="brown even"><a href="newsletters.php">News Letter<span>&nbsp;</span></a></li> 
	        		</ul>
	        	</div>
	            <div className="about-text col-sm-6">
	                <h2>Welcome To <span>RMKCET</span></h2>
                    <p>The RMK group of educational institutions began their educational services in the early nineties and for the past 25 years it is their sustained hard work and dedication that has carved on niche in the field of engineering education. RMK College of Engineering and Technology was established in 2008.</p>
                    <p>The motto of the college is very lofty. Safety and security is given top priority, then impeccable discipline. All are provided with good food, when these are made available engineering education becomes a child’s play. Teachers carefully nurture the young ones in the field of engineering and their mode of inspiring the students is available only here...</p>
	                <a href="college.php" class="el-btn-regular">Read More</a>
	            </div>
	            <div className="col-sm-3 higRig">
	            	<h3 className="newHea">News and Events</h3>
					<div>
	            	{/* <marquee behavior="scroll" direction="up" onmouseover="this.stop();" onmouseout="this.start();">
																			
	            		<div align="justify">24 March 2019 <a href="docs/Graduation.pdf" target="_blank">Cordially invite you to the 7<sup>th</sup>Graduation Day on Sunday at RMKEC Audiotorium</a></div>  <br>							
						<hr> <div align="justify"><a href="docs/Graduation day bus routes.pdf" target="_blank">Bus Routes for the Graduation Day</a></div>  <br> <br>	

																	
	            	</marquee> */}
	                </div>
	            </div>
	    
            </div>
           
        </div>

        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default MainPageBody;
