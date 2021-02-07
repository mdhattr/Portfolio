import React from 'react'
import Scroll from 'react-scroll'

const about = {


    cursor:'pointer',
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',


    letterSpacing: '0.1em',
    textTransform: 'uppercase',

    color: '#C2C7DF',

    marginRight: '24px'
}
const About = props =>{
    const scrollToSection = (e) => {
        const anchor = document.querySelector('#aboutButton')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    };
    return(
        <div style={about}>
            <p onClick={scrollToSection}>About</p>
        </div>
    )
}
export default About