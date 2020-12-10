import React from 'react'
import Project1ScreenShot from '../static/job_board.png'
import GitHubLogo from '../static/github.png'
import '../App.css'

const project3={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '20px',

    position: 'static',
   
    height: '374px',
    left: '0px',
    top: '0px',
    background: '#080517',
    borderRadius:'12px',


    /* Inside Auto Layout */

    flex: 'none',
    order: '0',
    flexGrow: '1',
    alignSelf: 'stretch',
    marginTop: '30px ',
    marginBottom: '30px ',
    marginRight: ' 0px',
    marginLeft: ' 0px',
}
const image = {
    position: 'static',
    width: '350px',
    height: '155px',
    left: 'calc(50% - 350px/2)',
    top: '0px',
    opacity: '0.9',

    /* Inside Auto Layout */

    flex: 'none',
    order: '0',
    flexGrow: '0',
    marginTop: '0px ',
    marginBottom: '0px ',
    marginLeft: ' 28px',
    marginRight: ' 28px',
}
const content2={
    position: 'static',
    width: '286px',
    height: '16px',
    left: '16px',
    top: '0px',

    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    /* identical to box height */

    textAlign: 'center',
    
    color: '#FFFFFF',


    /* Inside Auto Layout */

    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
    marginLeft: ' 8px',
    marginRight: ' 8px',
}
const content3={
    position: 'static',
    width: '286px',
    height: '21px',
    left: '16px',
    top: '24px',

    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '21px',
    /* identical to box height */

    textAlign: 'center',

    color: '#FFFFFF',


    /* Inside Auto Layout */

    flex: 'none',
    order: '1',
    alignSelf: 'stretch',
    flexGrow: '0',
    marginLeft: '8px',
    marginRight: '8px',
}
const contentBox ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft:  '16px',
    paddingRight:  '16px',
    marginTop:'20px',

    position: 'static',
    width: '318px',
    height: '45px',
    left: '0px',
    top: '0px',

}
const button1={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px',
    marginTop: '40px',

    position: 'static',
    width: '286px',
    height: '42px',
    left: '16px',
    top: '20px',

    background: '#0D0828',
    border: '1px #080517 solid',
    borderRadius: '8px',

    /* Inside Auto Layout */

    flex: 'none',
    order: '0',
    alignSelf: 'stretch',
    flexGrow: '0',
    marginLeft: '12px',
    marginRight: '12px',
}
const buttonText1 ={
    position: 'static',
    cursor:'pointer',
    height: '18px',
    left: 'calc(50% - 100px/2)',
    top: '12px',

    marginBlockStart: '0px',
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',

    color: '#FFFFFF',

}
const button2={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px',
    marginLeft:'12px',

    position: 'static',
    width: '286px',
    height: '44px',
    left: '16px',
    top: '54px',

    background: '#080517',

    border: '1px solid  #FFFFFF',

    borderRadius: '8px',
}
const buttonText2={
    position: 'static',
    cursor:'pointer',
    height: '20px',
    left: 'calc(50% - 135px/2 + 16px);',
    top: '12px',


    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',

    color: '#FFFFFF',
}
const buttonBox={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft:  '16px',
    paddingRight:  '16px',
    marginTop: '10px',

    position: 'static',
    width: '318px',
    height: '98px',
    left: '0px',
    top: '100px',

}
const gitLogo ={

    width: '20px',
    height: '20px',


}
const Project3 = props => {
    const gitHubLink = (e) => {
        window.open('https://github.com/mdhattr/JobBoard')
    };
    return(
        <div style={project3} className='col-desktop-4 col-tablet-4 col-mobile-4'>
            
            <div><img style={image} src={Project1ScreenShot} /></div>
            <div style={contentBox}>
                <p style={content2}>Python, Django, SQLite</p>
                <p style={content3}>Job Board</p>
            </div>
            <div onClick={gitHubLink} style={buttonBox}>
                {/* <button style={button1}><p style={buttonText1}>Learn More</p></button> */}
                <button style={button2}><img style= {gitLogo}  src={GitHubLogo}/><p style={buttonText2}>View On GitHub</p></button>
            </div>
        </div>
    )
}
export default Project3