import React from 'react'
import '../App.css'

const footer = {
    height: '82px',
    background:'#05030F',
    position: 'absolute',
}
const text = {

    
    height: '18px',

    
    

    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    letterSpacing: '0.1em',

    color: '#8E94B8',

}
const Footer = props => {
    return(
        <div style={footer} className="pageContainer E">
            <div  className="container">
                <p style={text}>© Copyright 2020 Tyler Hatter</p>
            </div>
        </div>
        
    )
}
export default Footer