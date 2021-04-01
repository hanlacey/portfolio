import React from 'react';

class ProjectCards extends React.Component {

    render() {
        return (
            <div className="project-card" >
                <a id="project-title" href={`${this.props.projectLink}`}
                >{this.props.projectTitle}</a>
                <p id="projectDescription">{this.props.projectDescription}</p>
            </div>

        );
    }
}

export default ProjectCards;

