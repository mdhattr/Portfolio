import React from 'react'


const python={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '12px ',
    paddingBottom: '12px',
    paddingRight: "24px",
    paddingLeft: "24px",
    marginRight:'12px',
    background: '#05030F',
}
const pythonText={
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '40px',
    lineHeight: '52px',
    color: '#FFFFFF',
    marginTop:'10px',
    marginBottom: '10px',
}
const Python = props => {
    return(
        <div style={python}>
            <p style={pythonText}>Python</p>
        </div>
        
    )
}
export default Python