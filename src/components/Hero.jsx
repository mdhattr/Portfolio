import React from 'react'
import HeroContent from './HeroContent'
const hero={
    position: 'absolute',
    
    height: '534px',

    top: '113px',
    background: "#0D0828",
}
const Hero = props => {
    return(
        <div style={hero} className="pageContainer">
            <HeroContent />
        </div>
        
    )
}
export default Hero