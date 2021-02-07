import React from 'react'


const mern={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '12px ',
    paddingBottom: '12px',
    paddingRight: "24px",
    paddingLeft: "24px",
    background: '#05030F',
}
const mernText={
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '40px',
    lineHeight: '52px',
    color: '#FFFFFF',
    marginTop: '10px',
    marginBottom: '10px',
}
const MERN = props => {
    return(
        <div style={mern}>
            <p style={mernText}>MERN</p>
        </div>
        
    )
}
export default MERN