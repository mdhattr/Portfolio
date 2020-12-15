import React from 'react'
import Python from '../techStackComponents/Python'
import Java from '../techStackComponents/Java'
import MERN from '../techStackComponents/MERN'
import '../App.css'

const pythonJavaMERN={


    alignItems: 'flex-start',

    // position: 'static',
    
    
    // left: '85px',
    // top: '186px',

    flex: 'none',
    order: '1',
    flexGrow: '0',

}

const PythonJavaMERN = props => {
    return(
        <div style={pythonJavaMERN} className="row">
            <Python className='col-desktop-4 col-tablet-4 col-mobile-4'/>
            <Java />
            <MERN />
        </div>
        
    )
}
export default PythonJavaMERN