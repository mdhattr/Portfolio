import React from 'react'
const nameText={

    marginTop:'45px',
    marginLeft:'30px',
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '21px',
    /* identical to box height */

    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#C2C7DF',
}
const Name = props => {
    return(
        <div >
            <p style={nameText}>TYLER</p>
        </div>
        
    )
}
export default Name