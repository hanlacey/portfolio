import './main.css';
import React from "react"
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'

class App extends React.Component {
  state = {
    projects: [
      {
        title: "NC News API",
        description: "RESTful API used to get, post, delete and vote on articles and comments, replicating the functionality of an online reddit-style forum. Built with Node.js, Express.js, PostgreSQL, Knex.js, and tested using Jest. Hosted with Heroku.",
        link: "https://hannah-nc-news.herokuapp.com/api",
        repo: "https://github.com/hanlacey/be-nc-news"
      },
      {
        title: "Watch this space",
        description: "Please watch this space for new projects 😊",
        link: "sorry there's nowhere to go",
        repo: "sorry there's nowhere to go"
      },
      {
        title: "And this space",
        description: "Please also watch this one...",
        link: "sorry there's nowhere to go",
        repo: "sorry there's nowhere to go"
      }
    ]
  }
  render() {

    return (
      <div className="App">
        <Header />
        <div className="project-card-container">
          {this.state.projects.map((project) => {
            return <ProjectCard projectTitle={project.title} projectDescription={project.description} projectLink={project.link} repoLink={project.repo} />
          })
          }
        </div>
        {/* <ProjectCard projectTitle={projects[1].watchThisSpace.title} projectDescription={projects[1].watchThisSpace.description} /> */}
      </div>
    );
  }
}

export default App;


