import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
// import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";



class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        {/* <div id="projects" class="background-alt">
        <h2 class="heading">Projects</h2>
        <div class="container">
            <div class="row">
                <div class="project shadow-large">
                    <div class="project-image">
                        <img src="images/project.jpg" />
                    </div> */}
                    <div class="card">
  <div class="card-body">
    <h5 class="card-title" >Dell EMC Projects</h5>
    <p class="card-text">
    <dl>
    <li>Compliance in Cloud based application(Rembrandt-LCM) for development and automation based on Agile environment. </li> 
    <li>Delivered DevOps Dashboard using React.js_Python Flask within 1 month. </li>
    <li>Communication with partners for on-time project delivery. </li> 
    <li>Channelizing multiple delivery both as a front-end and back-end developer. </li> 
    <li>Critical bug ﬁxer. </li> 
    <li>Augmenting the growth of Team through timely delivery. </li></dl>
    
    </p>
  </div>
</div>

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Shell Projects</h5>
    <p class="card-text">
    <dl>
    <li>Worked with US teams on various POCs like Testing Transcribe API's, Safety Control Room POC's using Alexa skills for business, Helmet Pattern Detection for field workers and Sophia Exploration Chatbots for Geologists </li> 
    <li>Testing Transcribe API(s) to assess the accuracy and word error rate using MS Cognitive services and Amazon AWS account. It’s the conversion of speech to text taking audio input files and converting into text and assessing the error rate. </li>
    <li>Worked on Alexa skills for business to control room for Safety Engineers by using Alexa 's voice command to bring  up information such as previous safety cases, diagrams, HazOps info etc on screens would help manage issues. </li> 
    <li>Real Time Helmet Pattern detection using OpencCV which lets Safety Engineers to detect whether they are wearing the helmet or not. I closely worked with deep learning models in combination with openCV library to create a solution for this. At the end it achieved 90% of accuracy. </li> 
    </dl>
    </p>
  </div>
</div>

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Detailed Tracker for Corona Virus Using Spring Boot Framework</h5>
    <p class="card-text">
    <dl>
    <li>Spring Boot Java App to track coronavirus confirmed cases across the globe till date</li> 
    <li>It fetches the information from CSV file and updates about the figures on every day basis. </li>
    <li>Perfomed get request to get CSV File URL and all the data is getting available , parsing it and Providing a page which renders the data in a nice web format.</li> 
   </dl>
    </p>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Portfolio Website</h5>
    <p class="card-text">
    <dl>
    <li>The website is completely built on react-js library of javascript. </li> 
    <li>It showcases the basic information about my Carrer, Educational Qualification, Resume and Experience.</li>
    <li>A clean, beautiful, responsive and 100% customizable portfolio. </li>
    </dl>
    </p>
  </div>
</div>
                    
    {/* <!-- End #projects --> */}
        {/* <div className="repo-cards-div-main"> */}
          {/* {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })} */}
        {/* </div> */}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
