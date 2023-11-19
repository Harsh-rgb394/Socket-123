import React from 'react'
import closeIcon from "../icons/onlineIcon.png"
import onlineIcon from "../icons/onlineIcon.png"
const InfoBar = () => {
  return (
    <div className='outercontainer'>
        <div className='leftcontainer'>
            <img className='img' src={closeIcon} alt="altimg"/>
            <h3>Room1</h3>
        </div>
        <div className='rightcontainer'>
            <a href='/'><img className='img' src={onlineIcon} alt="altimg"/></a>
        </div>
    </div>
  )
}

export default InfoBar