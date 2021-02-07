import React from 'react'
import FigmaLogo from '../static/figma.png'
import '../App.css'

const figma={
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


const Figma = props => {
    return(
        <div style={figma} className='col-desktop-4 col-tablet-4 col-mobile-4'>
            
            <div><img style={image} src={FigmaLogo} /></div>
            <p style={content2}>Figma</p>           
        </div>
        
    )
}
export default Figma