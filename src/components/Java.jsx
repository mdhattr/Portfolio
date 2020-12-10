import React from 'react'


const java={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '12px ',
    paddingBottom: '12px',
    paddingRight: "24px",
    paddingLeft: "24px",
    marginRight:'12px',

    position: 'static',
    width: '129px',
    height: '76px',
    left: '185px',
    top: '0px',

    background: '#05030F',


}
const javaText={
    position: 'static',
    width: '81px',
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


    /* Inside Auto Layout */

    flex: 'none',
    order: '0',
    flexGrow: '0',
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '0px',
    marginRight: '0px',
}
const Java = props => {
    return(
        <div style={java}>
            <p style={javaText}>Java</p>
        </div>
        
    )
}
export default Java