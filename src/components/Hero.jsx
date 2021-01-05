import React from 'react'
import HeroContent from './HeroContent'
import '../App.css'
const hero={
    // position: 'absolute',
    
    // height: '534px',

    paddingTop:"150px",
    paddingBottom:"100px",
    background: "#0D0828",
}
const Hero = props => {
    return(
        <div style={hero} className="pageContainer">
            <div className='row'>
                <HeroContent />
            </div>
            
        </div>
        
    )
}
export default Hero