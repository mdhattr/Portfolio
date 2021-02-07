import React from 'react'
import HtmlCssLogo from '../static/html_css.png'
import '../App.css'

const htmlCss={
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

const HTMLCSS = props => {
    return(
        <div style={htmlCss} className='col-desktop-4 col-tablet-4 col-mobile-4'>
            
            <div ><img style={image} src={HtmlCssLogo} alt="HTML tag"/></div>
            <p style={content2}>HTML & CSS</p>
            {/* <p style={content3}>Lorem ipsum dolor sit amet. Mention something about Bootstrap, SASS and other CSS frameworks.</p> */}
        </div>
        
    )
}
export default HTMLCSS