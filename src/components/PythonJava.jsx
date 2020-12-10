import React from 'react'
import Python from './Python'
import Java from './Java'
const pythonJava={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',

    position: 'static',
    width: '314px',
    height: '76px',
    left: '0px',
    top: '0px',


    /* Inside Auto Layout */

    flex: 'none',
    order: '0',
    flexGrow: '0',
    marginTop: '16px',
    marginBottom: '16px',
    marginLeft: '16px',
    marginRight: '16px',
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