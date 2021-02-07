import React from 'react'
import JavaLogo from '../static/java.png'
import '../App.css'

const java={
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

const content3={
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: '12px',
    marginRight: '12px',
}
const content4={
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '21px',
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: '20px',
    marginRight: '20px',
}
const Java = props => {
    return(
        <div style={java} className='col-desktop-4 col-tablet-4 col-mobile-4'>
            
            <div ><img style={image} src={JavaLogo} alt="Java Logo"/></div>
            <p style={content2}>Java</p>
            <p style={content3}>Includes Java and MySQL</p>
            {/* <p style={content4}>Lorem ipsum dolor sit amet consectur sit</p>
            <p style={content4}>lorem ipsum dolor sit amet.</p> */}
        </div>
        
    )
}
export default Java