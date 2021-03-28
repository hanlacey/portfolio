import './main.css';
import React from "react"
import Header from './components/Header'
import NCNews from './components/NCNews'
import Bio from './components/Bio'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Bio />
        <NCNews />
      </div>
    );
  }
}

export default App;
