import React from 'react';

class ProjectCard extends React.Component {

    render() {
        return (
            <div className="project-card" >
                <a id="projectTitle" href="https://hannah-nc-news.herokuapp.com/api"
                >{this.props.projectTitle}</a>
                <p id="projectDescription">{this.props.projectDescription}</p>
            </div>

        );
    }
}

export default ProjectCard;