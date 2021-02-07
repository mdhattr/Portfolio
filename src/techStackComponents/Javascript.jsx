import React from 'react'
import JavascriptLogo from '../static/javascript.png'
import '../App.css'

const javascript={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',
    marginTop: '30px ',
    marginBottom: '30px ',
}
const image = {
    width: '48px',
    height: '48px',
    marginLeft: ' 32px',
    marginRight: ' 32px',
}
const content2={
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '21px',
    textAlign: 'center',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginLeft: '12px',
    marginRight: '12px',
}

const Javascript = props => {
    return(
        <div style={javascript} className='col-desktop-4 col-tablet-4 col-mobile-4'>
            
            <div ><img style={image} src={JavascriptLogo} alt="Javascript Logo"/></div>
            <p style={content2}>JAVASCRIPT</p>
            {/* <p style={content3}>Lorem ipsum dolor sit amet consectur sit lorem ipsum dolor sit amet. </p> */}
        </div>
        
    )
}
export default Javascript