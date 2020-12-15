import React from 'react'
import '../App.css'
import PhotoOfMe from '../static/tyler.png'
const photo={
    width:'100%',
    maxWidth:'360px',
    webkitBoxShadow: '-30px 30px 0px -1px #000000',
    boxShadow: '-30px 30px 0px -1px #000000;',

}

const Photo = props => {
    return(
        <div  className="col-desktop-4 col-tablet-4 col-mobile-4">
            <img style={photo} src={PhotoOfMe} className=""/>
        </div>
        
    )
}
export default Photo