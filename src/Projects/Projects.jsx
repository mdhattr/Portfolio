import React from 'react'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import '../App.css'

const projects={
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
    top: '106px',
    paddingBottom: '60px',
}

const Projects = props => {
    return(
        <div style={projects} className="row">
            <Project1 />
            <Project2 />
            <Project3 />
        </div>
        
    )
}
export default Projects