import React from 'react'

const skills={
    position: 'static',
    width: '47px',
    height: '16px',
    left: '0px',
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
    order: '0',
    flexGrow: '0',
    marginRight: '24px',
}

const Skills = props =>{
    const scrollToSection = (e) => {
        const anchor = document.querySelector('#skillsButton')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    };
    return(
        <div style={skills}>
            <p onClick={scrollToSection}>Skills</p>
        </div>
    )
}
export default Skills