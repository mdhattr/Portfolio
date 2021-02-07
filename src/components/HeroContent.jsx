import React from 'react'
import '../App.css'

import HeroContentB from './HeroContentB'

const heroContent={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft:'20px',
}
const heroContentA={
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '40px',
    lineHeight: '52px',
    color: '#FFFFFF',
}
const emoji={
    paddingLeft:'230px',
    marginTop:'-95px',
}

const HeroContent = props => {
    return(
        <div className="container">
            <div style={heroContent} className='col-desktop-4 col-tablet-4 col-mobile-4'>
                <div style={heroContentA} >
                    <p >Hi, I’m Tyler  </p><div style={emoji} className="rotate">👋</div>
                    <p className="HeroP">Chicago-based software engineer, specializing in</p>
                </div>
                <HeroContentB />
            </div>
        </div>
        
        
    )
}
export default HeroContent