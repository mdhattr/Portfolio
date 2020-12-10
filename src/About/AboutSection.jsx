import React from 'react'
import Content from './Content'




const aboutSection={
    background: "#0D0828",
    position:'absolute',

    paddingBottom:'250px',
}


const AboutSection = props => {
    return(
        <div id="aboutButton" style={aboutSection} className="pageContainer D">
            <div  className="container">
                <Content />
            </div>
        </div>
        
    )
}
export default AboutSection