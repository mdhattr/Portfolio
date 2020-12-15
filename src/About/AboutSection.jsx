import React from 'react'
import Content from './Content'
import Footer from '../components/Footer'



const aboutSection={
    background: "#0D0828",

    paddingBottom:'200px',
}



const AboutSection = props => {
    return(
        <>
        <div id="aboutButton" style={aboutSection} className="pageContainer">
            <div  className="container about">
                <Content />
                
            </div>
            
        </div>

        
        </>
    )
}
export default AboutSection