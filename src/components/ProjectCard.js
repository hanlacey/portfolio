import React from 'react';

class ProjectCards extends React.Component {

    render() {
        return (
            <div className="project-card" >
                <a id="project-title" href={`${this.props.projectLink}`}
                >{this.props.projectTitle}</a>
                <p id="projectDescription">{this.props.projectDescription}</p>
                <a id="repo-link" href={this.props.repoLink}>Git repository</a>
            </div>

        );
    }
}

export default ProjectCards;

