import React from 'react'
import './Campus.css'
import galleryone from '../../../Asset/galleryone.png'
import gallerytwo from '../../../Asset/gallerytwo.png'
import gallerythree from '../../../Asset/gallerythree.png' 
import galleryfour from '../../../Asset/galleryfour.png'
import whitearrow from '../../../Asset/whitearrow.png'
const Campus = () => {
  return (
    <div className='Campus'>
   <div className="gallery">
      <img src={galleryone } alt="" />
      <img src={gallerytwo} alt="" />
      <img src={gallerythree} alt="" />
      <img src={galleryfour} alt="" /> 
</div>
 <botton className='btn'>See More here <img src={whitearrow}
  alt="" /></botton>

    </div>
  )
}

export default Campus