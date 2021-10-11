import React, { useState, useEffect } from "react";

import NavBar from "./navbar.js"
import ContentContainer from "./flashcardOverview.js"

const FlashCard = ({ match, location }) => {
  const [cards, setCards] = useState([0,1,2,3]);

    const { params: { setID } } = match;

  
  console.log(setID);
  
  useEffect(() => {
      if (localStorage.getItem('currentCards')) {
        setCards( JSON.parse(localStorage.getItem('currentCards')) );
      }
    }, []);
    
      
  return (
    <div>
        <div className="parent">
            <NavBar />
            <ContentContainer cards={ cards }/>
        </div> 
    </div>
  );
};

export default FlashCard;
