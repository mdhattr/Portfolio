import React from 'react'
import '../App.css'
import GitHubLogo from '../static/github.png'
import LinkedInLogo from '../static/linkedin.png'
import EmailLogo from '../static/email.png'
const copy = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',


}
const header = {
    position: 'static',
    width: '636px',
    height: '42px',
    left: '0px',
    top: '0px',

    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '32px',
    lineHeight: '42px',
    /* identical to box height */


    color: '#FFFFFF',
}
const content = {






    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '21px',
    /* identical to box height */
    color: '#FFFFFF',
}
const links ={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',

    position: 'static',
    width: '609px',
    height: '20px',
    left: '0px',
    top: '316px',
}
const gitHub = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',

    position: 'static',
    width: '190px',
    height: '20px',
    left: '0px',
    top: '0px',
}
const linkedIn = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',

    position: 'static',
    width: '236px',
    height: '20px',
    left: '207px',
    top: '0px',
}
const email = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    

    position: 'static',
    width: '184px',
    height: '20px',
    left: '450px',
    top: '0px',
}
const image = {
    width: '20px',
    marginRight:'3px',
}
const links2 ={
    color: '#8E94B8',
    textDecoration: 'none',
}

const Text = props => {
    return(
        <div style={copy} className="col-desktop-7 col-tablet-8 col-mobile-4">
            <p style={header} >Hey there! It’s nice to meet you.</p>
            <p style ={content}>My name is Tyler and I am a fresh graduate from coding dojo. Coding dojo is a 14 week full-time full-stack boot camp where I earned highest honors in three different full stack software development courses. Before coding dojo I was back of house management in restaurants. After working in restaurants for so many years, it was interesting to see how much less-than-functional software was available for restaurants to use. Everything from POS software, inventory tracking software, and labor management software.  <br/><br/>I have come to realize that this is because there was not a great deal of communication between the users and the people building the software. With the pandemic so greatly affecting the service industry, I decided that now would be a great time to leap into a different career. </p>
            <div style={links}>
                <div style={gitHub}>
                    <img src={GitHubLogo} style={image} alt="GitHub logo"/>
                    <a style={links2} href="https://github.com/mdhattr">github.com/mdhattr</a>
                </div>
                <div style={linkedIn}>
                    <img src={LinkedInLogo} style={image} alt="Linkedin logo"/>
                    <a style={links2}  href="https://www.linkedin.com/in/tylerhatter/">linkedin.com/in/tylerhatter</a>
                </div>
                <div style={email}>
                    <img src={EmailLogo} style={image} alt="Email icon"/>
                    <a  style={links2} href="mailto:tyler0hatter@gmail.com">tyler0hatter@gmail.com</a>
                </div>
            </div>
        </div>
        
    )
}
export default Text