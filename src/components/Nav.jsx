import React from 'react';
import Name from './Name';
import NavLinks from './NavLinks';
import '../App.css'
import NavSeperator from './NavSeperator';

const bar = {
    position: "fixed",
    zIndex:"9000",
    height:'93px',
    background: "#0D0828",
    display:'flex',
}

const Nav = props => {
    return(
        <div style={bar}  className="pageContainer">
            <Name />
            <NavLinks />
            <NavSeperator />
        </div>
        
    )
}
export default Nav