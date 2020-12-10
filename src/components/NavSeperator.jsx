import React from 'react'
import '../App.css'
const navSeperator={
    position: 'absolute',

    height: '2px',
    
    top: '111px',


    background:'#3A4062'
}
const NavSeperator = props => {
    return(
        <div style={navSeperator} className='pageContainer'>
        </div>
        
    )
}
export default NavSeperator