import React from 'react'
import '../App.js'
const contact = {
    cursor:'pointer',
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#C2C7DF',
    marginRight:'24px'
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