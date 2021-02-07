import React from 'react'

const skills={
    cursor:'pointer',
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#C2C7DF',
    marginRight: '24px',
}

const Skills = props =>{
    const scrollToSection = (e) => {
        const anchor = document.querySelector('#skillsButton')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    };
    return(
        <div style={skills}>
            <p onClick={scrollToSection}>Skills</p>
        </div>
    )
}
export default Skills