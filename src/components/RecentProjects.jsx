import React from 'react'
import Projects from '../Projects/Projects'

const recentProjects={
    position: 'absolute',
    



    background: "#0D0828",
}
const text ={
    position: 'relative',
    
    
    
    top: '80px',

    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '32px',
    lineHeight: '42px',
    /* identical to box height */

    textAlign: 'center',

    color: '#FFFFFF',


    /* Inside Auto Layout */

    flex: 'none',
    order: '0',
    flexGrow: '0',
    marginTop: '0px ',
    marginBottom: '0px ',


}

const RecentProjects = props => {
    return(
        <div id="workButton" style={recentProjects} className="pageContainer C">
            
            <div  className="container jenky">
                <p style={text}>Recent Projects</p>
                <Projects className='row'/>
            </div>
        </div>
        
    )
}
export default RecentProjects