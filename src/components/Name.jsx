import React from 'react'
const nameText={
    position: 'absolute',
    width: '340px',
    height: '21px',
    left: '85px',
    top: '32px',

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
            <p style={nameText}>TYLER HATTER</p>
        </div>
        
    )
}
export default Name