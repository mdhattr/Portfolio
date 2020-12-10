import React from 'react'
import Skills from './Skills'
import Work from './Work'
import About from './About'
import Contact from './Contact'
const navLinks={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',

    position: 'absolute',
    width: '265px',
    height: '16px',
    right: '85px',
    top: 'calc(50% - 16px/2)',
}

const NavLinks = props =>{
    return(
        <div style={navLinks}>
            <Skills />
            <Work />
            <About />
            <Contact />
        </div>
    )
}
export default NavLinks