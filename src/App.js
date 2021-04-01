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
        link: "https://hannah-nc-news.herokuapp.com/api"
      },
      {
        title: "Watch this space",
        description: "Please watch this space for new projects 😊",
        link: "sorry there's nowhere to go"
      },
      {
        title: "And this space",
        description: "Please also watch this one...",
        link: "sorry there's nowhere to go"
      }
    ]
  }
  render() {
    // const ncNews = this.state.projects[0].ncNews
    // const watchThisSpace = this.state.projects[1].watchThisSpace
    // const secondSpaceToWatch = this.state.projects[2].secondSpaceToWatch
    // //map ???


    return (
      <div className="App">
        <Header />
        <div className="project-card-container">
          {this.state.projects.map((project) => {
            console.log(project.title);
            return <ProjectCard projectTitle={project.title} projectDescription={project.description} projectLink={project.link} />
          })
          }
        </div>
        {/* <ProjectCard projectTitle={projects[1].watchThisSpace.title} projectDescription={projects[1].watchThisSpace.description} /> */}
      </div>
    );
  }
}

export default App;
