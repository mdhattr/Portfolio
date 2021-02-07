import React from 'react'
import Figma from '../techStackComponents/Figma'
import HTMLCSS from '../techStackComponents/HTMLCSS'
import Javascript from '../techStackComponents/Javascript'
import '../App.css'



const FigmaHtmlCssJavascript = props => {
    return(
        <div  className="row">
            <Figma/>
            <HTMLCSS />
            <Javascript />
        </div>
        
    )
}
export default FigmaHtmlCssJavascript