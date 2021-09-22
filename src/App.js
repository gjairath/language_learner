// App.js

import React, { Component } from "react";

import NavBar from "./components/navbar.js";
import OverviewContainer from "./components/Overview.js"

import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
  }

  render() {

    return (
        <div className="parent">
            <NavBar />        
            <OverviewContainer basePageItems={[ ['Flash-Cards', 'Review Your Cards!', 'fc.png', '/flashcards'], 
                                                ['Quiz', 'Test Your Skills!', 'quiz.png', '/quiz'] ]}/>
        </div>              
    );
  }
}

export default App;
