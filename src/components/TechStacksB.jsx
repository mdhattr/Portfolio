import React from 'react'
import '../App.css'
import FigmaHtmlCssJavascript from './FigmaHtmlCssJavascript'

const techStacks={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '80px',
    paddingBottom: '80px',
    background: '#05030F',
}

const TechStacksB = props => {
    return(
        <div style={techStacks} className='pageContainer B'>
            <div className="container">
                <FigmaHtmlCssJavascript className='row'/>
            </div>
        </div>
        
    )
}
export default TechStacksB