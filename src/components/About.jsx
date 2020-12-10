import React from 'react'
import Scroll from 'react-scroll'

const about = {
    position: 'static',
    width: '45px',
    height: '16px',
    left: '135px',
    top: '0px',
    cursor:'pointer',
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
    /* identical to box height */

    letterSpacing: '0.1em',
    textTransform: 'uppercase',

    color: '#C2C7DF',


    /* Inside Auto Layout */

    flex: 'none',
    order: '2',
    flexGrow: '0',
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