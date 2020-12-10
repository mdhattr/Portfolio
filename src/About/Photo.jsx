import React from 'react'
import '../App.css'
import PhotoOfMe from '../static/tyler.png'
const photo={
    width:'360px',
    webkitBoxShadow: '-30px 30px 0px -1px #000000',
    boxShadow: '-30px 30px 0px -1px #000000;',

}

const Photo = props => {
    return(
        <div  className="">
            <img style={photo} src={PhotoOfMe} className="col-desktop-4 col-tablet-4 col-mobile-4"/>
        </div>
        
    )
}
export default Photo