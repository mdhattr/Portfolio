import React from 'react'
import PythonJava from './PythonJava'
import Ampersand from './Ampersand'
import MERN from './MERN'
import '../App.css'
const heroContentB={
    display: 'flex',
    flexWrap:'wrap',
    alignItems: 'center',
    padding: '0px',
    marginTop:'10px',



    position: 'static',





}
const HeroContentB = props => {
    return(
        <div style={heroContentB}>
            <PythonJava />
            <Ampersand />
            <MERN />
            
        </div>
        
    )
}
export default HeroContentB