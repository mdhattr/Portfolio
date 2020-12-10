import React from 'react'
import PythonJava from './PythonJava'
import Ampersand from './Ampersand'
import MERN from './MERN'
const heroContentB={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    marginTop:'120px',
    marginLeft:'-35px',


    position: 'static',
    width: '531px',
    height: '76px',
    top: '216px',


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