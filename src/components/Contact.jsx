import React from 'react'
import '../App.js'
const contact = {
    position: 'static',
    width: '61px',
    height: '16px',
    left: '204px',
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
    order: '3',
    flexGrow: '0',
    margin: '24px 0px',
}
const Contact = props =>{
    const scrollToSection = (e) => {
        const anchor = document.querySelector('#aboutButton')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    };
    return(
        <div style={contact}>
            <p onClick={scrollToSection}>contact</p>
        </div>
    )
}
export default Contact