import React from "react";
import {Link} from "react-router-dom";
import projectsJson from "../projects"


function Project(props) {

    return (

        <div className="col-lg-4 col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
            <div className="portfolio-thumb">
                <img src={props.srcImage} className="img-responsive" alt="portfolio img"/>
                <div className="portfolio-overlay">
                    <Link to={"/details"}
                          state={props.project}>
                        <h4 className="">{props.name}</h4>
                    </Link>
                    <h5>{props.projectType}</h5>
                </div>
            </div>
        </div>
    );
}

function Portfolio() {
    let projects = projectsJson;

    return (
        <div id="portfolio" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="wow bounce">PORTAFOLIO</h2>
                    </div>
                    <div className="portfolio-container">
                    {projects.map(project =>
                        <Project
                            key={project.id}
                            srcImage={project.banner_src}
                            project={project}
                            name={project.name}
                            projectType={project.type}/>
                    )}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Portfolio