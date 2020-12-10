import React from 'react'


const mern={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '12px ',
    paddingBottom: '12px',
    paddingRight: "24px",
    paddingLeft: "24px",


    position: 'static',
    width: '173px',
    height: '76px',
    left: '0px',
    top: '0px',

    background: '#05030F',

}
const mernText={
    position: 'static',
    width: '109px',
    height: '52px',
    left: '24px',
    top: '12px',

    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '40px',
    lineHeight: '52px',
    /* identical to box height */


    color: '#FFFFFF',

}
const MERN = props => {
    return(
        <div style={mern}>
            <p style={mernText}>MERN</p>
        </div>
        
    )
}
export default MERN