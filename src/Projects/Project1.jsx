import React from 'react'
import Project1ScreenShot from '../static/pos.png'
import GitHubLogo from '../static/github.png'
import '../App.css'

const project1={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '20px',
    background: '#080517',
    borderRadius:'12px',
}
const image = {
    width:'100%',
    opacity: '0.9',
}
const content2={
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center',
    color: '#FFFFFF',
    alignSelf: 'stretch',
}
const content3={
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '21px',
    textAlign: 'center',
    color: '#FFFFFF',
    alignSelf: 'stretch',
}
const contentBox ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft:  '16px',
    paddingRight:  '16px',
}
const button1={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px',
    background: '#0D0828',
    border: '1px #080517 solid',
    borderRadius: '8px',
    alignSelf: 'stretch',

}
const buttonText1 ={
    cursor:'pointer',
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

    width: '286px',
    height: '44px',
    
    background: '#080517',
    border: '1px solid  #FFFFFF',
    borderRadius: '8px',
}
const buttonText2={
    position: 'static',
    cursor:'pointer',
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
    width: '318px',
    height: '98px',
}
const gitLogo = {
    height:'20px',
}



const Project1 = props => {
    const gitHubLink = (e) => {
        window.open('https://github.com/mdhattr/Restaurant-POS')
    };
        // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal

    const learnMore = (e) => {
        document.getElementById("myModal").style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal

    const modalClick = (e) => {
        document.getElementById("myModal").style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
    return(
        <div style={project1} className='col-desktop-4 col-tablet-4 col-mobile-4'>
            
            <div><img style={image} src={Project1ScreenShot} /></div>
            <div style={contentBox}>
                <p style={content2}>Python, Django, SQLite</p>
                <p style={content3}>Order Management for Restaurants</p>
            </div>
            <div style={buttonBox}>
                <button id="myBtn" onClick={learnMore} style={button1}><p style={buttonText1}>Learn More</p></button>
                <button onClick={gitHubLink} style={button2}><img style= {gitLogo}  src={GitHubLogo}/><p style={buttonText2}>View On GitHub</p></button>
            
            </div>
            <div id="myModal" class="modal">

                {/* <!-- Modal content --> */}
                <div class="modal-content">
                    <span onClick={modalClick} class="close">&times;</span>
                    <p>The whole concept of this project was to really focus on relational database structures. The grand plan was to create a database schema that would allow you to take a daily sales report for a restaurant and query all the way back to allow for a detailed report of all items sold - detailed to the point where an executive chef could click a few buttons and find out amounts of every single ingredient sold that day. This could be used to help with ordering from vendors and also give a more in depth view on food cost.</p>
                </div>

            </div>
        </div>
    )
}
export default Project1