import React from 'react'
import PythonJavaMERN from './PythonJavaMERN'
import '../App.css'

const techStacks={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '80px',
    paddingBottom: '80px',

    position: 'absolute',
    
    
    left: '0px',
    top: '627px',

    background: '#080517',
}
const text = {
    position: 'static',
    
    
    left: '420px',
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
const TechStacks = props => {
    return(
        <div  id="skillsButton" style={techStacks} className="pageContainer">
            <div className="container">
                <p style={text}>Three Full Development Stacks</p>
                <PythonJavaMERN className='row'/>
            </div>
            
        </div>
        
    )
}
export default TechStacks