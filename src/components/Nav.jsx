import React from 'react';
import Name from './Name';
import NavLinks from './NavLinks';
import '../App.css'

const bar = {
    position: "absolute",
    height: "93px",
    
    
    top: "20px",
    background: "#0D0828",
}

const Nav = props => {
    return(
        <div style={bar}  className="pageContainer">
            <Name />
            <NavLinks />
            
        </div>
        
    )
}
export default Nav