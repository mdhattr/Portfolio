import React from 'react'
import Python from './Python'
import Java from './Java'
const pythonJava={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}
const PythonJava = props => {
    return(
        <div style={pythonJava}>
            <Python />
            <Java />
            
        </div>
        
    )
}
export default PythonJava