import React from 'react'

const work = {
    position: 'static',
    width: '40px',
    height: '16px',
    left: '71px',
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
    order: '1',
    flexGrow: '0',
    marginRight: '24px',
}

const Work = props =>{
    const scrollToSection = (e) => {
        const anchor = document.querySelector('#workButton')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    };
    return(
        <div style={work}>
            <p onClick={scrollToSection}>work</p>
        </div>
    )
}
export default Work