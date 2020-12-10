import React from 'react'
import JavascriptLogo from '../static/javascript.png'
import '../App.css'

const javascript={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',

    position: 'static',
    
    height: '193px',
    left: '0px',
    top: '0px',


    /* Inside Auto Layout */

    flex: 'none',
    order: '0',
    flexGrow: '0',
    marginTop: '30px ',
    marginBottom: '30px ',
    marginRight: ' 0px',
    marginLeft: ' 0px',
}
const image = {
    position: 'static',
    width: '48px',
    height: '48px',
    left: '151px',
    top: '0px',

    /* Inside Auto Layout */

    flex: 'none',
    order: '0',
    flexGrow: '0',
    marginTop: '0px ',
    marginBottom: '0px ',
    marginLeft: ' 32px',
    marginRight: ' 32px',
}
const content2={
    position: 'static',
    height: '21px',
    left: 'calc(50% - 310px/2)',
    top: '0px',

    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '21px',
    /* identical to box height */

    textAlign: 'center',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',

    color: '#FFFFFF',


    /* Inside Auto Layout */

    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
    marginLeft: '12px',
    marginRight: '12px',
}
const content3={
    position: 'static',
    height: '18px',
    left: '0px',
    top: '33px',

    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '18px',
    /* identical to box height */

    textAlign: 'center',

    color: '#FFFFFF',


    /* Inside Auto Layout */

    flex: 'none',
    order: '1',
    alignSelf: 'stretch',
    flexGrow: '0',
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