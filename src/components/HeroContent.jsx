import React from 'react'
import '../App.css'

import HeroContentB from './HeroContentB'

const heroContent={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',

    position: 'absolute',
    width: '531px',
    height: '292px',
    left: '85px',
    top: '121px',
}
const heroContentA={
    position: 'static',
    width: '528px',
    height: '176px',
    left: '1.5px',
    top: '0px',

    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '40px',
    lineHeight: '52px',

    color: '#FFFFFF',

}
const HeroContent = props => {
    return(
        <div style={heroContent}>
            <div style={heroContentA}>
                <p >Hi, I’m Tyler 👋 </p>
                <p>Chicago-based software engineer, specializing in</p>
            </div>
            <HeroContentB />
        </div>
        
    )
}
export default HeroContent