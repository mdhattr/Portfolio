import React from 'react'
import HeroContent from './HeroContent'
const hero={
    // position: 'absolute',
    
    // height: '534px',

    paddingTop:"150px",
    paddingBottom:"100px",
    background: "#0D0828",
}
const Hero = props => {
    return(
        <div style={hero} >
            <HeroContent />
        </div>
        
    )
}
export default Hero