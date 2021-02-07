import React from 'react'
import PythonJavaMERN from './PythonJavaMERN'
import '../App.css'

const techStacks={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '80px',
    paddingBottom: '80px',
    background: '#080517',
}
const text = {
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '32px',
    lineHeight: '42px',
    textAlign: 'center',
    color: '#FFFFFF',
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