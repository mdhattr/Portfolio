import React from 'react'
import Figma from '../techStackComponents/Figma'
import HTMLCSS from '../techStackComponents/HTMLCSS'
import Javascript from '../techStackComponents/Javascript'
import '../App.css'

const figmaHtmlCssJavascript={


    alignItems: 'flex-start',

    position: 'static',
    
    
    left: '85px',
    top: '186px',

    flex: 'none',
    order: '1',
    flexGrow: '0',

}

const FigmaHtmlCssJavascript = props => {
    return(
        <div style={figmaHtmlCssJavascript} className="row">
            <Figma/>
            <HTMLCSS />
            <Javascript />
        </div>
        
    )
}
export default FigmaHtmlCssJavascript