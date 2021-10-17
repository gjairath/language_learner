// FlashcardSets.js
// This is reusing the component Overview.js because I'm lazy.

import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

import NavBar from "./navbar.js";
import OverviewContainer from "./Overview.js"
import styles from './styles/overview.module.css'; 

import styled from 'styled-components'


const FlashcardSet = (props) => {

    const [numSets, setNumSets] = useState(JSON.parse(localStorage.getItem('totalSets')) || 1);

    const addSet = () => {
        
        console.log("test");
        setNumSets(numSets + 1);
        localStorage.setItem('totalSets', JSON.stringify(numSets));
        
        return;
    }
    
    const constructPage = () => {
    
        
        let bp = [['Deck A', '', 'flash-cards.png', '/flashcards/A']];
        let i = 1;
        
        while (i < numSets) {
            var ascii = String.fromCharCode(i + 97).toUpperCase();
            var str = `Deck ${ascii}`
            var link = `/flashcards/${ascii}`
            
            bp.push([str, '', 'flash-cards.png', link]);
            i += 1;
        }
        
        bp[bp.length - 1].push(btn);
        
        console.log(bp);
        return bp;
    }

    
    useEffect(() => {
        localStorage.setItem('totalSets', JSON.stringify(numSets));
    });
    
    
    let btn = <a className={styles.link_inside} onClick={addSet}> Add More </a>;
    let arr = constructPage();

    let overideStyling = {
      marginTop: "20px" 
    };
    
    let overrideWrapper = {
        width: "59%"
    };
    
    console.log(arr);
    
    return (
        <div className="parent">
            <NavBar />        
            <OverviewContainer basePageItems={arr} style={overideStyling} styleWrapper={overrideWrapper} isDotted={true}
                disabled={false}/>
                <div style={{height: "50px"}}> </div>

        </div>              
    )
}


export default FlashcardSet;