import React from 'react'
import Photo from './Photo'
import Text from './Text'
import '../App.css'

const projects={


    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px',
    paddingRight:'15px',
    
    position: 'relative',


    // left: '15px',
    top: '106px',

}

const Content = props => {
    return(
        <div style={projects} className="row">
            <Photo />
            <Text />
        </div>
        
    )
}
export default Content