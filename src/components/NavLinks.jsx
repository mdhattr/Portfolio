import React from 'react'
import Skills from './Skills'
import Work from './Work'
import About from './About'
import Contact from './Contact'
const navLinks={
    display: 'flex',
    
    alignItems: 'center',

    marginTop:'40px',
    position: 'absolute',

    right: '0px',

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